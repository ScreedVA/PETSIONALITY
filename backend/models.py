# PyPi Dependencies
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, ForeignKey, Enum as SQLAlchemyEnum, JSON, Time
from sqlalchemy.orm import relationship
from db import Base

# Python Library
from datetime import datetime

# Modules
from enums import UserStatus, PottyBreakFrequency

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
    email = Column(String(100), unique=True, nullable=False)
    hashed_password = Column(String(100), nullable=False)
    date_of_birth = Column(Date, nullable=True)
    status = Column(SQLAlchemyEnum(UserStatus), default=UserStatus(1))
    phone_no = Column(String(100), nullable=True)
    city = Column(String(100), nullable=True)
    country = Column(String(100), nullable=True)
    postal_code = Column(String(100), nullable=True)

    is_sitter = Column(Boolean, default=False)
    is_trainer = Column(Boolean, default=False)
    profile_image = Column(String, nullable=True)

    token = relationship('TokenTable', back_populates='user')
    pets = relationship('PetTable', back_populates='user')

    dog_boarding = relationship("DogBoardingTable", back_populates="user", uselist=False)
    doggy_day_care = relationship("DoggyDayCareTable", back_populates="user", uselist=False)
    drop_in_visits = relationship("DropInVisitsTable", back_populates="user", uselist=False)
    dog_walking = relationship("DogWalking", back_populates="user", uselist=False)


class PetTable(TimeStampModel):
    __tablename__ = 'pets'

    name = Column(String, nullable=True)
    species = Column(String, nullable=True)  # e.g., dog, cat
    gender = Column(String, nullable=True)
    
    breed = Column(String, nullable=True)
    size = Column(String, nullable=True)
    photo = Column(String, nullable=True)  # URL to profile image
    description = Column(String, nullable=True)
    yob = Column(Integer, nullable=True)
    spayed_neutured = Column(Boolean, nullable=True)
    microchipped = Column(Boolean, nullable=True)
    vaccinations = Column(Boolean, nullable=True)
    house_trained = Column(Boolean, nullable=True)
    friendly_with = Column(JSON, nullable=True)  # 👈 New column

    owner_id = Column(Integer, ForeignKey('user.id'), nullable=False)

    user = relationship('UserTable', back_populates='pets' )

class TokenTable(TimeStampModel):
    __tablename__ = "token"

    token = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    expiration_date = Column(DateTime, nullable=False)

    user = relationship('UserTable', back_populates='token')

    def update(self, token, expiration_date):
        self.token = token
        self.expiration_date = expiration_date


class BaseHomeService(TimeStampModel):
    __abstract__ = True

    max_dogs = Column(Integer)
    checkin_time = Column(Time)
    checkout_time = Column(Time)
    multi_family_allowed = Column(Boolean)
    potty_break_freq = Column(JSON, nullable=False)
    is_active = Column(Boolean, default=False)

# Visit-based services
class BaseVisitService(TimeStampModel):
    __abstract__ = True

    max_distance_km = Column(Integer)
    max_visits_per_day = Column(Integer)

    # Stores a list of time slot strings like ["6:00-11:00", "11:00-15:00"]
    available_times = Column(JSON, nullable=False)
    is_active = Column(Boolean, default=False)


class DogBoardingTable(BaseHomeService):
    __tablename__ = "dog_boarding"

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("UserTable", back_populates="dog_boarding")


class DoggyDayCareTable(BaseHomeService):
    __tablename__ = "doggy_day_care"

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("UserTable", back_populates="doggy_day_care")


class DropInVisitsTable(BaseVisitService):
    __tablename__ = "drop_in_visits"

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("UserTable", back_populates="drop_in_visits")


class DogWalking(BaseVisitService):
    __tablename__ = "dog_walking"

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("UserTable", back_populates="dog_walking")