# PyPi dependencies
from fastapi import FastAPI

# Python Libraries

# Modules
from db import Base, engine, SessionLocal
from routers import auth, user
from data import add_default_data

app = FastAPI()

Base.metadata.create_all(bind=engine) # Initialize Database Tables/Metadata

app.include_router(auth.router)
app.include_router(user.router)

@app.on_event("startup")
def startup_event():
    db = SessionLocal()  
    try:
        add_default_data(db)  
    finally:
        db.close()