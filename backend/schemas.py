from pydantic import BaseModel
from typing import Optional

class CreateUserFrontend(BaseModel):
    email: str
    username: str
    password: str


class ReadToken(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str


