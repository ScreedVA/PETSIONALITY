# PyPi Dependencies
from sqlalchemy.orm import Session
from passlib.context import CryptContext

# Python Library
from typing import Optional, Dict, Any
from datetime import datetime

# Modules
from models import UserTable, TokenTable, PetTable
from schemas import CreateUserFrontend, UpdateUserFrontend

# Read
def read_user_list(db: Session, filter = None):
    """Accepts filer and returns list of users"""
    user_list = db.query(UserTable).all()

    return user_list
def read_user(db: Session, filter: Optional[Dict[str, Any]] = None) -> UserTable:
    """
    Retrieve users filtered by the given fields in `filter` dict.
    Supported filters: 'name', 'email'.

    Parameters:
    - db: SQLAlchemy session.
    - filter: Dictionary with optional keys: 'name', 'email'.

    Returns:
    - List of matching users.
    """
    query = db.query(UserTable)

    if filter:
        if "name" in filter and filter["name"]:
            query = query.filter(UserTable.name.ilike(f"%{filter['name']}%"))
        if "email" in filter and filter["email"]:
            query = query.filter(UserTable.email.ilike(f"%{filter['email']}%"))

    return query.first()
def read_user_by_name(db: Session, username: str):
    """
    Retrieves a single user from the database by exact username match.

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - name (str): The exact username to search for.

    Returns:
    - UserTable | None: The matched user instance if found, otherwise None.

    Note:
    - This function performs a case-sensitive exact match on the `username` field.
    - Caller is responsible for handling the `None` result if no user is found.
    """
    user = db.query(UserTable).filter(UserTable.username == username).first()
    return user
def read_user_by_email(db: Session, email: str):
    """
    Retrieves a single user from the database by exact username match.

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - email (str): The exact username to search for.

    Returns:
    - UserTable | None: The matched user instance if found, otherwise None.

    Note:
    - This function performs a case-sensitive exact match on the `email` field.
    - Caller is responsible for handling the `None` result if no user is found.
    """
    user = db.query(UserTable).filter(UserTable.username == email).first()

    return user
def read_user_by_id(db: Session, id: int):
    """
    Retrieves a single user from the database by exact id match.

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - id (str): The exact id to search for.

    Returns:
    - UserTable | None: The matched user instance if found, otherwise None.

    Note:
    - This function performs a case-sensitive exact match on the `id` field.
    - Caller is responsible for handling the `None` result if no user is found.
    """
    user = db.query(UserTable).filter(UserTable.id == id).first()

    return user

def read_token(db: Session, token):
    """
    Retrieves a stored refresh token from the database.

    Parameters:
    - db (Session): SQLAlchemy database session used to query the token table.
    - token (str): The refresh token string to look up.

    Returns:
    - TokenTable | None: The matching token record if found, otherwise None.

    Notes:
    - This function is typically used to validate or refresh a user's session.
    - Ensure that token expiration is checked elsewhere if required.
    """
    stored_token = db.query(TokenTable).filter(TokenTable.token == token).first()
    return stored_token
def read_token_list(db: Session, filter = None):
    stored_token_list = db.query(TokenTable).all()
    return stored_token_list
def read_token_by_user_id(db: Session, user_id: int):
    token = db.query(TokenTable).filter(TokenTable.user_id == user_id).first()
    
    return token

def read_pet_list(db: Session, filter = None):
    """Accepts filer and returns list of pets"""
    pet_list = db.query(PetTable).all()

    return pet_list

def read_pet_list_by_owner_id(
    db: Session,owner_id: int,
    detail_level: str = "full",
    limit: int = None
):
    """
    Retrieve a list of pets belonging to a specific owner, with optional detail level and result limit.

    Parameters
    ----------
    db : Session
        The SQLAlchemy database session used for querying.
    owner_id : int
        The ID of the owner whose pets are to be retrieved.
    detail_level : str, optional
        Level of detail to return for each pet. 
        - "summary": Returns only id, name, and description fields.
        - "full" (default): Returns full pet model objects.
    limit : int, optional
        Maximum number of pets to return. If not specified, returns all matching pets.

    Returns
    -------
    list
        A list of pets:
        - If detail_level is "summary", returns a list of dicts with keys: "id", "name", "description".
        - If detail_level is "full", returns a list of PetTable model instances.

    Raises
    ------
    None explicitly raised. Any database exceptions will propagate naturally.
    """
    if detail_level == "summary":
        query = db.query(PetTable.id, PetTable.name, PetTable.description).filter(PetTable.owner_id == owner_id)
        if limit:
            query = query.limit(limit)
        return [
            {"id": r.id, "name": r.name, "description": r.description}
            for r in query.all()
        ]

    # full detail
    query = db.query(PetTable).filter(PetTable.owner_id == owner_id)
    if limit:
        query = query.limit(limit)
    return query.all()
def read_pet_by_id(
    db: Session,
    pet_id: int,
    detail_level: str = "full"
):
    """
    Retrieve a pet by ID with optional detail level.

    Parameters
    ----------
    db : Session
        SQLAlchemy session.
    pet_id : int
        ID of the pet.
    detail_level : str
        "summary" or "full".

    Returns
    -------
    PetTable or dict
        Pet object or dict with summary fields.
    """
    if detail_level == "summary":
        result = db.query(
            PetTable.id,
            PetTable.name,
            PetTable.description
        ).filter(PetTable.id == pet_id).first()

        if result:
            return {
                "id": result.id,
                "name": result.name,
                "description": result.description
            }
        return None

    # Full detail
    return db.query(PetTable).filter(PetTable.id == pet_id).first()


#  Create
def create_user(db: Session, schema: CreateUserFrontend):
    """
    Creates and persists a new user in the database.

    This function:
    - Hashes the plaintext password using bcrypt
    - Constructs a new `UserTable` SQLAlchemy model instance
    - Adds the user to the database session and commits the transaction

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - schema (CreateUserFrontend): Input data containing `username`, `password`, and `email`.

    Returns:
    - UserTable: The newly created and committed user instance.

    Note:
    - The password is stored securely as a bcrypt hash.
    - Raises an exception if the database operation fails (e.g., duplicate email).
    """

    # Convert Plain Text to hash
    bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

    user = UserTable(
        username=schema.username,
        hashed_password=bcrypt_context.hash(schema.password),
        email=schema.email
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user
def create_refresh_token(db: Session, token: str, user_id: int, expiration_date: datetime):
    """
    Stores a new refresh token in the database.

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - token (str): The refresh token string to store.
    - user_id (int): The ID of the user to associate with the token.
    - expiration_date (datetime): The datetime when the token will expire.

    Returns:
    - None

    Notes:
    - Commits the token to the database and refreshes the instance.
    - This is typically called after issuing a new refresh token during login or token renewal.
    """
    token = TokenTable(token=token, user_id=user_id, expiration_date=expiration_date)

    db.add(token)
    db.commit()
    db.refresh(token)

# Updated
def update_user_by_id(db: Session, user_id: int, update_request: UpdateUserFrontend): 
    user = db.query(UserTable).filter(UserTable.id == user_id).first()

    if not user:
        return None

    update_fields = update_request.model_dump(exclude_unset=True)
    
    for field, value in update_fields.items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user
