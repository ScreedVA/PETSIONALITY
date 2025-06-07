# PyPi dependencies
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware 
from dotenv import load_dotenv, find_dotenv

# Python Libraries
import os

# Modules
from db import Base, engine, SessionLocal
from routers import auth, user, pet, sitter, trainer
from data import add_default_data
from services import verify_api_key
from models import UserTable, PetTable, TokenTable

Base.metadata.create_all(bind=engine) # Initialize Database Tables/Metadata


load_dotenv(find_dotenv())
app = FastAPI()

frontend_url = os.getenv("FRONTEND_URL")

print("Frontend URL", frontend_url)
origins = [
    "http://localhost:5173", 
    "http://127.0.0.1:5173",
    frontend_url,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],     
)


app.include_router(auth.router)
app.include_router(user.router)
app.include_router(pet.router)
app.include_router(sitter.router)
app.include_router(trainer.router)


@app.on_event("startup")
def startup_event():
    db = SessionLocal()  
    try:
        add_default_data(db)  
    finally:
        db.close()