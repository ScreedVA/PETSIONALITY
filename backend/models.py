# PyPi Dependencies
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, ForeignKey, Enum as SQLAlchemyEnum
from sqlalchemy.orm import relationship
from db import Base

# Python Library
from datetime import datetime

# Modules
from enums import UserStatus

class BaseModel(Base):
    """Wrapper for sqlalchemy declaritive_base"""
    __abstract__ = True

    id = Column(Integer, primary_key=True, index=True)

class TimeStampModel(BaseModel):
    __abstract__ = True
    """Wrapper for sqlalchemy declaritive_base"""
    created_at = Column(DateTime, nullable=False, default=datetime.now())
    updated = Column(DateTime, onupdate=datetime.now())

class UserTable(TimeStampModel):
    __tablename__ = "user"

    username = Column(String(100), unique=True, nullable=False)
    hashed_password = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    date_of_birth = Column(Date, nullable=True)
    status = Column(SQLAlchemyEnum(UserStatus), default=UserStatus(1))

    token = relationship('TokenTable', back_populates='user')


class TokenTable(TimeStampModel):
    __tablename__ = "token"

    token = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    expiration_date = Column(DateTime, nullable=False)

    user = relationship('UserTable', back_populates='token')

    def update(self, token):
        self.token = token
