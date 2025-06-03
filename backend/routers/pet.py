# PyPi Dependencies
from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import List

# Modules
from models import UserTable
from crud import read_pet_list
from db import db_dependency

router = APIRouter(
    prefix="/pet",
    tags=["pet"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test():
    return "test user router"


@router.get("/list", status_code=status.HTTP_200_OK)
async def get_list(db: db_dependency, filter = None):
    """
    Retrieve a list of all pets.

    This endpoint queries the database for all available pets and returns the list.
    If no pets are found, a 404 error is raised.

    Parameters:
    ----------
    db : Session (Injected via FastAPI Depends)
        The SQLAlchemy database session used for querying pet records.

    Returns:
    -------
    List[User]
        A list of pet records if found.

    Raises:
    -------
    HTTPException (404):
        Raised if no pets are found in the database.
    HTTPException (422):
        Raised by FastAPI for invalid query/path/body parameters (handled automatically).
    HTTPException (500):
        Raised if an unexpected error occurs during execution.
    """
    try:
        # Business Logic
        pet_list = read_pet_list(db=db)

        if not pet_list:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No pets found.")

        return pet_list

    except HTTPException:
        raise  # re-raise custom exceptions

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )

