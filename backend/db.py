# pypi packages
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import SQLAlchemyError
from fastapi import Depends, HTTPException

# python libraries
from typing import Annotated

# modules

SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"
# SQLALCHEMY_DATABASE_URL = "sqlite:///./dev.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


Base.metadata.create_all(bind=engine) # Initialize Database Tables/Metadata


def get_db():
    db = SessionLocal()
    try:
        yield db
    except SQLAlchemyError as e:
        # DB-level errors
        db.rollback()
        raise HTTPException(status_code=500, detail=f"A database error occurred.\n Error Message: {e}")
    finally:
        db.close()

# Dependency for the DB session, db_dependency becomes a reusable dependency type
db_dependency = Annotated[Session, Depends(get_db)]
