# Pypi dependancies
from pydantic import BaseModel, Field

# Python Libraries
from datetime import time
from typing import Optional, Dict

# Modules
from enums import PottyBreakFrequency

# Create or Update
class CreateUserFrontend(BaseModel):
    email: str
    username: str
    password: str
class UpdateUserFrontend(BaseModel):
    username: str
    email: str
    city: Optional[str] = None
    country: Optional[str] = None
    postal_code: Optional[str] = Field(default=None, alias="postalCode")
    phone_no: Optional[str] = Field(default=None, alias="phoneNo")

    class Config:
        validate_by_name = True  # Enables population via field name or alias


# Read

class ReadToken(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str

class ReadPetSummary(BaseModel):
    id: Optional[int] = None
    name: Optional[str] = None
    description: Optional[str] = None

class ReadPetFull(ReadPetSummary):
    species: Optional[str] = None
    gender: Optional[str] = None 

    breed: Optional[str] = None
    size: Optional[str] = None
    photo: Optional[str] = None
    yob: Optional[int] = None
    spayed_neatured: Optional[bool] = Field(None, alias="spayedNeutered")
    microchipped: Optional[bool] = None
    vaccinations: Optional[bool] = None
    house_trained: Optional[bool] = Field(None, alias="houseTrained")
    friendly_with: Optional[Dict[str, bool]] = Field(None, alias="friendlyWith")
    owner_id: int

    model_config = {
        "from_attributes": True,  # replaces orm_mode
        "populate_by_name": True
    }

class ReadBaseHomeService(BaseModel):
    max_dogs: Optional[int] = Field(None, alias="maxDogs")
    checkin_time: Optional[time] = Field(None, alias="checkinTime")
    checkout_time: Optional[time] = Field(None, alias="checkoutTime")
    multi_family_allowed: Optional[bool] = Field(None, alias="multiFamilyAllowed")
    potty_break_freq: Optional[Dict[str, bool]] = Field(None, alias="pottyBreakFreq")
    is_active: Optional[bool] = Field(False, alias="isActive")

    model_config = {
        "from_attributes": True,   # replaces orm_mode, enables loading from ORM objects
        "populate_by_name": True,  # allows using field aliases both ways
    }

class ReadDogBoarding(ReadBaseHomeService):
    id: int
    user_id: int = Field(..., alias="userId")

class ReadDoggyDayCare(ReadBaseHomeService):
    id: int
    user_id: int = Field(..., alias="userId")

# Base Schema for Visit Services
class ReadBaseVisitService(BaseModel):
    max_distance_km: Optional[int] = Field(None, alias="maxDistanceKm")
    max_visits_per_day: Optional[int] = Field(None, alias="maxVisitsPerDay")
    available_times: Optional[Dict[str, bool]] = Field(None, alias="availableTimes")
    is_active: Optional[bool] = Field(False, alias="isActive")

    model_config = {
        "from_attributes": True,
        "populate_by_name": True
    }
class ReadDropInVisits(ReadBaseVisitService):
    id: int
    user_id: int = Field(..., alias="userId")
class ReadDogWalking(ReadBaseVisitService):
    id: int
    user_id: int = Field(..., alias="userId")


class ReadTrainerInfo(BaseModel):
    id: int
    training_specialities: Dict[str, bool] = Field(None, alias="trainingSpecialities")
    service_options: Dict[str, bool] = Field(None, alias="serviceOptions")
    user_id: int = Field(None, alias="userId")

    model_config = {
        "from_attributes": True,
        "populate_by_name": True
    }

 


# Create
class CreatePet(BaseModel):
    name: Optional[str] = None
    species: Optional[str] = None
    gender: Optional[str] = None
    breed: Optional[str] = None
    size: Optional[str] = None
    photo: Optional[str] = None
    description: Optional[str] = None
    yob: Optional[int] = None
    spayed_neutured: Optional[bool] = Field(None, alias="spayedNeutured")
    microchipped: Optional[bool] = None
    vaccinations: Optional[bool] = None
    house_trained: Optional[bool] =  Field(None, alias="houseTrained")
    friendly_with: Optional[Dict[str, bool]] = Field(None, alias="friendlyWith")

    model_config = {
        "populate_by_name": True,           # ✅ Allow deserialization by alias
        "from_attributes": True             # ✅ Required for .model_validate with SQLAlchemy models
    }

class CreateOrUpdateBaseHomeService(ReadBaseHomeService):
    pass

class CreateOrUpdateBaseVisitService(ReadBaseVisitService):
    pass

class CreateOrUpdateTrainerInfo(BaseModel):
    training_specialities: Dict[str, bool] = Field(..., alias="trainingSpecialities")
    service_options: Dict[str, bool] = Field(..., alias="serviceOptions")

    model_config = {
        "populate_by_name": True,
        "from_attributes": True
    }