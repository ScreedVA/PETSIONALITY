# PyPi Dependencies
from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from starlette import status

# Python Library
from typing import List

# Modules
from models import UserTable
from crud import read_user_list
from db import db_dependency

# Convert Plain Text to hash
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')



router = APIRouter(
    prefix="/user",
    tags=["user"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test():
    return "test user router"

@router.get("/list", status_code=status.HTTP_200_OK)
async def get_list(db: db_dependency, filter):
    """
    Retrieve a list of all users.

    This endpoint queries the database for all available users and returns the list.
    If no users are found, a 404 error is raised.

    Parameters:
    ----------
    db : Session (Injected via FastAPI Depends)
        The SQLAlchemy database session used for querying user records.

    Returns:
    -------
    List[User]
        A list of user records if found.

    Raises:
    -------
    HTTPException (404):
        Raised if no users are found in the database.
    HTTPException (422):
        Raised by FastAPI for invalid query/path/body parameters (handled automatically).
    HTTPException (500):
        Raised if an unexpected error occurs during execution.
    """
    try:
        # Business Logic
        user_list = read_user_list(db=db)

        if not user_list:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="No users found.")

        return user_list

    except HTTPException:
        raise  # re-raise custom exceptions

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )


