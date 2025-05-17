
# PyPi dependancies
from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from starlette import status
from jose import JWTError

# Python Library
from typing import Dict, Annotated
from datetime import timedelta

# Modules 
from db import db_dependency
from crud import create_user, create_refresh_token, read_user_by_name, read_token, read_user_by_id, read_token_list
from schemas import CreateUserFrontend, ReadToken
from services import duplicate_user_check, issue_token, decode_token, authenticate_user, issue_access_and_refresh_tokens, upsert_refresh_token

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
        
        return ReadToken(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type='bearer'
        )


    except HTTPException:
        raise  # re-raise custom exceptions

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )



@router.post("/login", status_code=status.HTTP_200_OK)
async def login(db: db_dependency, form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    """
    Authenticates a user using their username and password and returns a JWT access token.

    Parameters:
    - db (Session): Database session dependency used for querying user data.
    - form_data (OAuth2PasswordRequestForm): Form data containing `username` and `password`, parsed from the request body.

    Returns:
    - ReadTokenFrontend: An object containing the access token and its type if authentication is successful.

    Raises:
    - HTTPException 404: If the user is not found or credentials are incorrect.
    - HTTPException 401: If the JWT token cannot be created or verified.
    - HTTPException 500: For any unexpected internal server error.

    Notes:
    - Expects credentials in OAuth2-compatible form format (application/x-www-form-urlencoded).
    - Token is returned as a Bearer token to be used in the `Authorization` header for authenticated routes.
    """
    try:
        # Business Logic
        user = read_user_by_name(db, form_data.username)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="No users found.")
        
        if not authenticate_user(db, form_data.username, form_data.password):
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="User un-authorized")
            
        tokens = issue_access_and_refresh_tokens(user.id, user.username, timedelta(minutes=30), timedelta(days=7))
        upsert_refresh_token(db, user.id, tokens["refresh_token"])

        return ReadToken(
            access_token=tokens["access_token"],
            refresh_token=tokens["refresh_token"],
            token_type="bearer"
        )

    except HTTPException:
        raise  # re-raise custom exceptions

    except JWTError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail=f'User not authorized: {str(e)}')

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )
    

@router.post("/refresh", status_code=status.HTTP_200_OK)
async def refresh_access_token(db: db_dependency, refresh_token: str):
    try:
        stored_token = read_token(db, refresh_token) 
       
        if not stored_token:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
 
        user = read_user_by_id(db, stored_token.user_id)


        new_access_token, _ = issue_token(stored_token.user_id, user.username, timedelta(minutes=30))

        # return ReadToken(
        #     access_token=new_access_token,
        #     token_type="bearer"
        # )
        return {
            "stored_token_object": stored_token,
            "stored_token_decoded": decode_token(refresh_token)
        }

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )

@router.get("/test/refresh/list", status_code=status.HTTP_200_OK)
async def refresh_token_list(db: db_dependency):
    token_list = read_token_list(db)

    return token_list
