
# PyPi dependancies
from fastapi import APIRouter, HTTPException
from starlette import status

# Python Library
from typing import Dict
from datetime import timedelta

# Modules 
from db import db_dependency
from crud import create_user, create_refresh_token
from schemas import CreateUserFrontend, ReadTokenFrontend
from services import duplicate_user_check, issue_token

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(db: db_dependency, user_schema: CreateUserFrontend):
    """
    Registers a new user, issues access and refresh tokens, and stores the refresh token.

    Workflow:
    - Checks if a user with the same username or email already exists.
    - Creates the user and persists it to the database.
    - Generates access and refresh JWT tokens.
    - Stores the refresh token in the database.
    - Returns both tokens in a standardized format.

    Parameters:
    - db (Session): Database session dependency.
    - user_schema (CreateUserFrontend): User data from the request body including username, email, and password.

    Returns:
    - ReadTokenFrontend: A Pydantic model containing `access_token`, `refresh_token`, and `token_type`.

    Raises:
    - 409 Conflict: If the username or email is already in use.
    - 500 Internal Server Error: If an unexpected error occurs.
    """
    try:
        # Business Logic
        if duplicate_user_check(db=db, email=user_schema.email, username=user_schema.username):
            raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail="A user with the same username or email already exists.")

        user_table = create_user(db=db, schema=user_schema)
        access_token, _ = issue_token(user_table.username, user_table.id, timedelta(minutes=30))
        refresh_token, refresh_expires = issue_token(user_table.username, user_table.id, timedelta(days=7))

        create_refresh_token(db, refresh_token, user_table.id, refresh_expires)
        
        token_response = ReadTokenFrontend(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type='bearer'
        )
        return token_response

    except HTTPException:
        raise  # re-raise custom exceptions

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )



    

    return "test auth router"



@router.get("/test", status_code=status.HTTP_200_OK)
async def test():
    return "test auth router"
