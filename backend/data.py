# Pypi Dependencies

# Python Library
from datetime import datetime

# Modules
from db import db_dependency
from models import UserTable
from services import bcrypt_context
from enums import UserStatus

def add_default_data(db: db_dependency):

    # Add UserTables
    for row in list([
        UserTable(username="Judith", hashed_password=bcrypt_context.hash("BYX.S8CSPqVXER5"), email="judith@gmail.com", date_of_birth=datetime.date(datetime.strptime("2000-01-01", "%Y-%m-%d")), status=UserStatus(1)),
        UserTable(username="Lena", hashed_password=bcrypt_context.hash(":uY.DemYvm8Lyi."), email="lena@gmail.com", date_of_birth=datetime.date(datetime.strptime("2000-01-01", "%Y-%m-%d")), status=UserStatus(1))]):
        

        db.add(row)
        db.commit()