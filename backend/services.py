# PyPi Dependencies
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import jwt

# Python Library
from datetime import datetime, timedelta
from typing import Dict, Annotated

# Modules
from crud import read_user_by_name, read_user_by_email, read_token_by_user_id, create_refresh_token
from models import UserTable

# Convert Plain Text to hash
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/login')

SECRET_KEY = '197b2c37c391bed93fe80344fe73b806947a65e36206e05a1a23c2fa12702fe3'
ALGORITHM = 'HS256'

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
    encode = {
        "id": user_id,
        "username": username,
        "expiration_date": datetime.strftime(expires, "%Y-%m-%d")
    }

    token_encoded: str = jwt.encode(claims=encode, key=SECRET_KEY, algorithm=ALGORITHM)

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

async def decode_token(token: Annotated[str, Depends(oauth2_bearer)]):

    # Decode and authorize Access Token str -> GETDecodedAccessTokenSchema
    token_decoded: Dict = jwt.decode(claim=token, key=SECRET_KEY, algorithms=ALGORITHM)

    return token_decoded

def upsert_refresh_token(db: Session, user_id: int, token: str):
    
    token_table = read_token_by_user_id(db, user_id)

    if token_table:
        token_table.update(token)
    else:
        create_refresh_token(db, token, user_id)
        

