# PyPi Dependencies
from fastapi import APIRouter, HTTPException, Query, Path
from passlib.context import CryptContext
from starlette import status
from jose import JWTError

# Python Library
from typing import List, Optional, Union

# Modules
from services import user_dependency
from db import db_dependency
from schemas import ReadTrainerInfo, CreateOrUpdateTrainerInfo
from crud import read_trainer_info_by_user_id, upsert_trainer_info, read_trainer_info_list

router = APIRouter(
    prefix="/trainer",
    tags=["trainer"]
)

@router.get("/test", status_code=status.HTTP_200_OK)
async def test():
    return "test user router"


# GET
@router.get("/list", status_code=status.HTTP_200_OK)
async def get_list(db: db_dependency, filter = None):
    try:
        # Business Logic
        trainer_info_list = read_trainer_info_list(db=db)

        if not trainer_info_list:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="No trainer info found.")

        return trainer_info_list

    except HTTPException:
        raise  # re-raise custom exceptions

    
    except Exception as e:
        # Log generic error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred: {str(e)}"
        )


@router.get("/me", response_model=ReadTrainerInfo)
async def get_my_trainer_info(

    user: user_dependency,  # user_dependency
    db: db_dependency            # db_dependency
):
    try:
        trainer_info = read_trainer_info_by_user_id(db, user["id"])
        if not trainer_info:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Trainer info not found for this user."
            )

        return ReadTrainerInfo.model_validate(trainer_info)

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )
    

# UPSERT
@router.put("/me", response_model=ReadTrainerInfo)
@router.post("/me", response_model=ReadTrainerInfo)
async def upsert_my_trainer_info(
    payload: CreateOrUpdateTrainerInfo,
    db: db_dependency,
    user: user_dependency
):
    try:
        result = upsert_trainer_info(db, user["id"], payload)
        return ReadTrainerInfo.model_validate(result)
    
    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )