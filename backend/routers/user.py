# PyPi Dependencies
from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import List

# Modules
from models import UserTable
from schemas import UpdateUserFrontend
from crud import read_user_list, read_user_by_id, update_user_by_id
from db import db_dependency
from services import user_dependency

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
async def get_list(db: db_dependency, filter = None):
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

@router.get("/me", status_code=status.HTTP_200_OK)
async def get_logged_in_user(db:db_dependency, user: user_dependency):
    """
    Retrieve details of the currently authenticated user.

    This endpoint returns the user information extracted from the validated JWT token.
    Requires a valid Bearer token in the Authorization header.

    Parameters:
    -----------
    user : dict
        Injected via dependency; contains decoded token info of the authenticated user.

    Returns:
    --------
    UserTable
        The user's data.

    Raises:
    -------
    HTTPException 401
        If the token is invalid or the user info cannot be verified.
    HTTPException 500
        For any unexpected errors during processing.
    """
    try:        
        user_data = read_user_by_id(db, user["id"])
        return user_data

    except HTTPException as e:
        raise HTTPException()# Re-raise handled exceptions

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            detail=f"Unexpected error: {str(e)}")


@router.put("/me", status_code=status.HTTP_201_CREATED)
async def update_logged_in_user(
    db: db_dependency,
    user: user_dependency,
    updated_data: UpdateUserFrontend
):

    try:        
        updated_user = update_user_by_id(db, user_id=user["id"], update_request=updated_data)

        if not updated_user:
            raise HTTPException(status_code=404, detail="Not Found: User to update does not exist")

        return updated_user

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            detail=f"Unexpected error: {str(e)}")
