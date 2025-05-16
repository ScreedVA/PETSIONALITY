from pydantic import BaseModel

class CreateUserFrontend(BaseModel):
    email: str
    username: str
    password: str

class ReadTokenFrontend(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str


