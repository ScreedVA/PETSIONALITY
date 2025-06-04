from pydantic import BaseModel, Field
from typing import Optional

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



class ReadToken(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str


