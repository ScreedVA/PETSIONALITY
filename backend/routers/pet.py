# PyPi Dependencies
from fastapi import APIRouter, HTTPException, Query, Path
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import List, Optional

# Modules
from models import UserTable, PetTable
from crud import read_pet_list, read_pet_list_by_owner_id, read_pet_by_id, create_pet_for_owner
from db import db_dependency
from services import user_dependency, verify_pet_ownership
from schemas import CreatePet

router = APIRouter(
    prefix="/pet",
    tags=["pet"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test():
    return "test user router"

@router.get("/list/owner/me", status_code=status.HTTP_200_OK)
async def get_logged_owner_pets(
    db: db_dependency,
    user: user_dependency,
    detail_level: Optional[str] = Query("full", enum=["summary", "full"]),
    limit: int = Query(None, ge=1, le=100)
):
    """
    Retrieve a list of pets for the currently authenticated owner with optional detail level and limit.

    Parameters
    ----------
    db : Session (injected)
        The SQLAlchemy database session dependency.
    user : dict (injected)
        The currently authenticated user information extracted from the token.
    detail_level : str, optional
        Query parameter specifying the level of detail for pet data:
        - "summary": Only returns pet id, name, and description.
        - "full" (default): Returns full pet records.
    limit : int, optional
        Query parameter to limit the number of returned pets. Must be between 1 and 100 inclusive.
        If omitted, all pets matching the owner are returned.

    Returns
    -------
    list
        A list of pets belonging to the authenticated user in the requested detail format.

    Raises
    ------
    HTTPException (404)
        If no pets are found for the owner.
    HTTPException (422)
        If query parameters fail validation (e.g., invalid detail_level or limit out of bounds).
    HTTPException (500)
        If an unexpected error occurs during query execution or processing.
    """
    try:
        pets = read_pet_list_by_owner_id(db, user["id"], detail_level, limit)

        if not pets:
            raise HTTPException(status_code=404, detail="Not Found: No pets exist for this owner")
        return pets

    except HTTPException as e:
        raise e
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )
    
@router.get("/owner/me/{pet_id}", status_code=status.HTTP_200_OK)
async def get_logged_owner_pet_by_id(
    db: db_dependency,
    user: user_dependency,
    detail_level: Optional[str] = Query("full", enum=["summary", "full"]),
    pet_id: int = Path(..., ge=1),
):
    """
    Retrieve a pet by ID for the currently authenticated owner.

    Parameters
    ----------
    pet_id : int
        ID of the pet.
    db : Session
    user : dict
    detail_level : str
        'summary' or 'full' (default)

    Returns
    -------
    dict or PetTable
    """
    try:
        pet = read_pet_by_id(db, pet_id, detail_level)

        if not pet:
            raise HTTPException(status_code=404, detail="Not Found: Pet does not exist")

        # Check ownership (must use full object if in summary mode)
        if not verify_pet_ownership(db, pet_id, user["id"]):
                raise HTTPException(status_code=401, detail="User Unauthorized: User is not owner of pet")

        return pet

    except HTTPException as e:
        raise e
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error occurred: {str(e)}"
        )

@router.post("/owner/me", status_code=status.HTTP_201_CREATED)
async def create_pet_for_logged_owner(
    pet: CreatePet,
    db: db_dependency,
    user=user_dependency
):
    try:
        new_pet = create_pet_for_owner(db=db, owner_id=user.id, pet_data=pet)
        return new_pet
    
    except Exception as e:
        # Catch-all for any other unhandled exceptions
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected error occurred while creating the pet. Error Message: {e}"
        )
    

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


