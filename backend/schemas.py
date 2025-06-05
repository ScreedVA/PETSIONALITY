from pydantic import BaseModel, Field
from typing import Optional, Dict

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
