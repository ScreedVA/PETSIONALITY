# PyPi Dependencies
from fastapi import APIRouter, HTTPException, Query, Body
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import Union

# Modules
from schemas import ReadDoggyDayCare, ReadDogBoarding, CreateOrUpdateBaseHomeService, ReadDropInVisits, ReadDogWalking, CreateOrUpdateBaseVisitService
from db import db_dependency
from services import user_dependency
from crud import read_dog_boarding_by_user, read_doggy_day_care_by_user, upsert_dog_boarding, upsert_doggy_day_care, read_dog_walking_by_user, read_drop_in_visits_by_user, upsert_dog_walking, upsert_drop_in_visits
from models import DogBoardingTable

# Convert Plain Text to hash


router = APIRouter(
    prefix="/sitter",
    tags=["sitter"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test(db: db_dependency):

    return db.query(DogBoardingTable).all()



# GET
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
@router.get("/visit_service/me", response_model=Union[ReadDropInVisits, ReadDogWalking])
async def get_visit_service(
    user: user_dependency,
    db: db_dependency,
    service_type: str = Query(..., pattern="drop_in_visits|dog_walking")
):
    try:
        if service_type == "drop_in_visits":
            service_table = read_drop_in_visits_by_user(db, user["id"])
            if not service_table:
                raise HTTPException(status_code=404, detail="Not Found: User does not offer drop-in visits")
            service = ReadDropInVisits.model_validate(service_table)
        else:
            service_table = read_dog_walking_by_user(db, user["id"])
            if not service_table:
                raise HTTPException(status_code=404, detail="Not Found: User does not offer dog walking")
            service = ReadDogWalking.model_validate(service_table)

        return service

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )

# USERT
@router.put("/home_service/me", response_model=Union[ReadDogBoarding, ReadDoggyDayCare])
@router.post("/home_service/me", response_model=Union[ReadDogBoarding, ReadDoggyDayCare])
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
@router.put("/visit_service/me", response_model=Union[ReadDropInVisits, ReadDogWalking])
@router.post("/visit_service/me", response_model=Union[ReadDropInVisits, ReadDogWalking])
async def upsert_visit_service(
    user: user_dependency,
    db: db_dependency,
    service_type: str = Query(..., pattern="drop_in_visits|dog_walking"),
    payload: CreateOrUpdateBaseVisitService = Body(...),
):
    try:
        if service_type == "drop_in_visits":
            instance = upsert_drop_in_visits(db, user["id"], payload)
            return ReadDropInVisits.model_validate(instance)
        elif service_type == "dog_walking":
            instance = upsert_dog_walking(db, user["id"], payload)
            return ReadDogWalking.model_validate(instance)
        else:
            raise HTTPException(status_code=400, detail="Invalid service_type")
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error: {str(e)}"
        )


