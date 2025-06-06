# PyPi Dependencies
from fastapi import Depends, HTTPException, Header
from fastapi.security import OAuth2PasswordBearer, HTTPBearer
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import jwt, JWTError
from starlette import status

# Python Library
from datetime import datetime, timedelta
from typing import Dict, Annotated
import os
import uuid

# Modules
from crud import read_user_by_name, read_user_by_email, read_token_by_user_id, create_refresh_token, read_pet_by_id, read_user_by_id
from models import UserTable

# Convert Plain Text to hash
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/login', auto_error=False)


login_dependency = Annotated[str, Depends(oauth2_bearer)]


SECRET_KEY = os.getenv('JWT_SECRET_KEY', "197b2c37c391bed93fe80344fe73b806947a65e36206e05a1a23c2fa12702fe3")

ALGORITHM = 'HS256'
EXPECTED_API_KEY = os.getenv('X_API_KEY', "123")

security = HTTPBearer(auto_error=False)


async def get_current_user(token: login_dependency):
    """
    Extract and validate the current user from a Bearer token.

    This function is used as a FastAPI dependency to retrieve and validate
    the current authenticated user from a JWT token provided in the
    Authorization header. If the token is invalid or missing required
    user information, an HTTP 401 error is raised.

    Parameters:
    -----------
    token : str
        The JWT Bearer token extracted from the Authorization header.

    Returns:
    --------
    dict
        A dictionary containing the decoded user information from the token.

    Raises:
    -------
    HTTPException
        If the token is invalid, expired, or missing required fields.
    """
    try:
        if token is None:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                                detail='Request Forbidden: Missing or malformed Authorization Header')

        decoded_token = jwt.decode(token=token, key=SECRET_KEY, algorithms=ALGORITHM)

        if decoded_token is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail='User Unauthorized: Access Token Invalid/Expired')
        return decoded_token
    
    except JWTError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail=f'User Unauthorized: JWTError:{e}')
    
user_dependency = Annotated[dict, Depends(get_current_user)]

async def get_auth_header(authorization: str = Header(None)):
    """
    Extracts the raw Authorization header (e.g., "Bearer <token>").

    Parameters:
    -----------
    authorization : str
        The Authorization header sent by the client.

    Returns:
    --------
    str
        The full Authorization header value.

    Raises:
    -------
    HTTPException (401)
        If the header is missing.
    """
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header missing")
    return authorization

auth_dependency = Annotated[str, Depends(get_auth_header)]

def verify_api_key(x_api_key: str = Header(None)):
    if x_api_key is None:
        raise HTTPException(status_code=403, detail="Missing X-API-Key header")

    if x_api_key != EXPECTED_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or missing API key"
        )
    return x_api_key


def duplicate_user_check(db: Session, username: str, email: str):
    """
    Checks whether a user with the given username or email already exists in the database.

    Parameters:
    - db (Session): Active SQLAlchemy database session.
    - username (str): Username to check.
    - email (str): Email address to check.

    Returns:
    - bool: True if a user with the same username or email exists, False otherwise.

    Note:
    - This is typically used before user creation to enforce uniqueness constraints.
    """
    if read_user_by_email(db, email) is not None or read_user_by_name(db, username) is not None:
        return True
    return False

def issue_token(username: str, user_id: int, expires_delta:timedelta):
    """
    Issues a JWT token containing the user's ID, username, and expiration date.

    Parameters:
    - username (str): The username to include in the token payload.
    - user_id (int): The user's unique identifier.
    - expires_delta (timedelta): The time duration after which the token should expire.

    Returns:
    - dict:
        - "token" (str): The encoded JWT token string.
        - "expiration_date" (datetime): The exact expiration timestamp.

    Notes:
    - The expiration date is also included as a string in the token payload under `"expiration_date"`.
    - The JWT is signed using the configured `SECRET_KEY` and `ALGORITHM`.
    """
    expires: datetime = datetime.now() + expires_delta
    payload = {
        "id": user_id,
        "username": username,
        "exp": int(expires.timestamp()),  # standard 'exp'
        "iat": int(datetime.utcnow().timestamp()),  # issued at
        "jti": str(uuid.uuid4()),  # unique token ID
    }

    token_encoded: str = jwt.encode(claims=payload, key=SECRET_KEY, algorithm=ALGORITHM)

    return token_encoded, expires

def issue_access_and_refresh_tokens(username: str, user_id: int, access_expire: timedelta, refresh_expire: timedelta):
    
    access_token, access_expires = issue_token(user_id, username, access_expire)
    refresh_token, refresh_expires = issue_token(user_id, username, refresh_expire)

    return {
        "access_token": access_token,
        "access_expires": access_expires,
        "refresh_token": refresh_token,
        "refresh_expires": refresh_expires
    }

def authenticate_user(db: Session, username: str, password: str):
    """
    Authenticates a user by verifying their username and password.

    Parameters:
    - db (Session): Active SQLAlchemy session for database access.
    - username (str): The username to search for in the database.
    - password (str): The plaintext password to verify against the stored hash.

    Returns:
    - bool: Returns True if authentication succeeds.
    - bool: Returns False if authentication fails.

    Notes:
    - Uses bcrypt to securely compare the provided password with the stored hash.
    - Relies on `read_user_by_name` to fetch the user record.
    """

    user: UserTable = read_user_by_name(db, username)
    if bcrypt_context.verify(password, user.hashed_password):
        return True
    return False

def upsert_refresh_token(db: Session, user_id: int, token: str, expiration_date: datetime):
    token_table = read_token_by_user_id(db, user_id)

    if token_table:
        # ✅ Assign values directly
        token_table.token = token
        token_table.expiration_date = expiration_date
    else:
        create_refresh_token(db, token, user_id, expiration_date)

    # ✅ Always commit changes
    db.commit()


def verify_pet_ownership(db, pet_id, user_id: int):
    """
    Raises 401 if the pet is not owned by the given user.

    Parameters
    ----------
    db: Session(injected)
    pet_id : PetTable
        The pet object to verify.
    user_id : int
        The ID of the authenticated user.

    Returns
    ------
    boolean
    """
    pet_table = read_pet_by_id(db, pet_id)

    return pet_table.owner_id == user_id

def verify_is_trainer(db, user_id):
    return read_user_by_id(db, user_id).is_trainer

