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
    name: str
    species: str
    gender: str
    breed: Optional[str] = None
    size: Optional[str] = None
    photo: Optional[str] = None
    description: Optional[str] = None
    yob: Optional[int] = None
    spayed_neatured: Optional[bool] = Field(None, alias="spayedNeatured")
    microchipped: Optional[bool] = None
    vaccinations: Optional[bool] = None
    house_trained: Optional[bool] =  Field(None, alias="houseTrained")
    friendly_with: Optional[Dict[str, bool]] = Field(None, alias="friendlyWith")

    class Config:
        validate_by_name = True  # Enables population via field name or alias


# Read

class ReadToken(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str


