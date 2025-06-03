# Pypi Dependencies

# Python Library
from datetime import datetime

# Modules
from db import db_dependency
from models import UserTable, PetTable
from services import bcrypt_context
from enums import UserStatus

def add_default_data(db: db_dependency):

    # Add UserTables
    for row in list([
        UserTable(username="Judith", hashed_password=bcrypt_context.hash("BYX.S8CSPqVXER5"), email="judith@gmail.com", date_of_birth=datetime.strptime("2000-01-01", "%Y-%m-%d").date(), status=UserStatus(1), phone_no="1234567890", city="Hamburg", country="Germany", postal_code="10115"),
        UserTable(username="Lena", hashed_password=bcrypt_context.hash(":uY.DemYvm8Lyi."), email="lena@gmail.com", date_of_birth=datetime.strptime("2000-01-01", "%Y-%m-%d").date(), status=UserStatus(1), phone_no="0987654321", city="Hamburg", country="Germany", postal_code="80331"),       

        PetTable(name="Buddy", species="dog", breed="Golden Retriever", age=4, photo="https://example.com/photos/buddy.jpg", owner_id=1),
        PetTable(name="Mittens", species="cat", breed="Siamese", age=2, photo="https://example.com/photos/mittens.jpg", owner_id=1),
        PetTable(name="Charlie", species="dog", breed="Beagle", age=3, photo="https://example.com/photos/charlie.jpg", owner_id=1),
        PetTable(name="Luna", species="cat", breed="Maine Coon", age=1, photo="https://example.com/photos/luna.jpg", owner_id=2),
        PetTable(name="Rocky", species="dog", breed="Boxer", age=5, photo="https://example.com/photos/rocky.jpg", owner_id=2), 
        PetTable(name="Coco", species="cat", breed="Persian", age=2, photo="https://example.com/photos/coco.jpg", owner_id=2)]):

        db.add(row)
        db.commit()