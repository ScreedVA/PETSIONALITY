# PyPi Dependencies
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import jwt

# Python Library
from datetime import datetime, timedelta
from typing import Dict

# Modules
from crud import read_user_by_name, read_user_by_email

# Convert Plain Text to hash
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

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

    token = jwt.encode(claims=encode, key=SECRET_KEY, algorithm=ALGORITHM)

    return token, expires