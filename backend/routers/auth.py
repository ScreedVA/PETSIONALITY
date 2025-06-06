
# PyPi dependancies
from fastapi import APIRouter, HTTPException, Depends, Header
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
from services import duplicate_user_check, issue_token, authenticate_user, issue_access_and_refresh_tokens, upsert_refresh_token, auth_dependency

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

ACCESS_TOKEN_EXP = 10000 # Seconds
REFRESH_TOKEN_EXP = 7 # Days


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
    - ReadToken: An object containing the access token and its type if authentication is successful.

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
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found.")
        
        if not authenticate_user(db, form_data.username, form_data.password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User unauthorized")
            
        tokens = issue_access_and_refresh_tokens(user.id, user.username, timedelta(seconds=ACCESS_TOKEN_EXP), timedelta(days=7))
        
        upsert_refresh_token(db, user.id, tokens["refresh_token"], tokens["refresh_expires"])
        
        return ReadToken(
            access_token=tokens["access_token"],
            refresh_token=tokens["refresh_token"],
            token_type="bearer"
        )

    except HTTPException as e:
        # Re-raise known HTTP errors as-is
        raise e
    except JWTError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail=f'User not authorized: {str(e)}')

    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )
    
@router.get("/refresh", status_code=status.HTTP_200_OK)
async def refresh_access_token(db: db_dependency, refresh_token:str = Header(None)):
    """
    Refresh the access token using a valid refresh token.

    This endpoint allows clients to obtain a new access token by presenting a previously issued
    valid refresh token. It ensures the refresh token exists in the database and is linked to
    a valid user. If validation succeeds, a new access token is generated and returned.

    Parameters:
    -----------
    db : Session (Injected)
        SQLAlchemy database session dependency.
    refresh_token : str
        The refresh token string used to generate a new access token.

    Returns:
    --------
    ReadToken
        A pydantic response model containing the new access token and its token type.

    Raises:
    -------
    HTTPException (401)
        If the provided refresh token is invalid, not found, or not associated with any user.
    HTTPException (500)
        If any unexpected error occurs during token lookup or generation.
    """
    try:
        stored_token = read_token(db, refresh_token) 
       
        if not stored_token:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User Unauthorized: Invalid or Missing refresh token")
 
        user = read_user_by_id(db, stored_token.user_id)

        new_access_token, _ = issue_token(username=user.username, user_id=stored_token.user_id, expires_delta=timedelta(seconds=ACCESS_TOKEN_EXP))

        return ReadToken(
            access_token=new_access_token,
            token_type="bearer"
        )
    
    except HTTPException as e:
        # Re-raise known HTTP errors as-is
        raise e

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
