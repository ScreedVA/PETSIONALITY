# PyPi Dependencies
from fastapi import APIRouter, HTTPException, Query, Body
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import Union

# Modules
from schemas import ReadDoggyDayCare, ReadDogBoarding, CreateOrUpdateBaseHomeService
from db import db_dependency
from services import user_dependency
from crud import read_dog_boarding_by_user, read_doggy_day_care_by_user, upsert_dog_boarding, upsert_doggy_day_care
from models import DogBoardingTable

# Convert Plain Text to hash


router = APIRouter(
    prefix="/sitter",
    tags=["sitter"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test(db: db_dependency):

    return db.query(DogBoardingTable).all()

@router.get("/home_service/me", response_model=Union[ReadDogBoarding, ReadDoggyDayCare])
async def get_home_service(    
    user: user_dependency,
    db: db_dependency,
    service_type: str = Query(..., pattern="dog_boarding|doggy_day_care")
):
    try:
        if service_type == "dog_boarding":
            service_table = read_dog_boarding_by_user(db, user["id"])
            if not service_table:
                raise HTTPException(status_code=404, detail="Not Found: User does not offer dog boarding")
            service = ReadDogBoarding.model_validate(service_table)
        else:
            service_table = read_doggy_day_care_by_user(db, user["id"])
            if not service_table:
                raise HTTPException(status_code=404, detail="Not Found: User does not offer doggy day care")
            service = ReadDoggyDayCare.model_validate(service_table)

        return service

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )


@router.put("/home_service", response_model=Union[ReadDogBoarding, ReadDoggyDayCare])
@router.post("/home_service", response_model=Union[ReadDogBoarding, ReadDoggyDayCare])
async def upsert_home_service(
    user: user_dependency,
    db: db_dependency,
    service_type: str = Query(..., pattern="dog_boarding|doggy_day_care"),
    payload: CreateOrUpdateBaseHomeService = Body(...),
):
    try:
        if service_type == "dog_boarding":
            instance = upsert_dog_boarding(db, user["id"], payload)
            return ReadDogBoarding.model_validate(instance)
        elif service_type == "doggy_day_care":
            instance = upsert_doggy_day_care(db, user["id"], payload)
            return ReadDoggyDayCare.model_validate(instance)
        else:
            raise HTTPException(status_code=400, detail="Invalid service_type")
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error: {str(e)}"
        )


