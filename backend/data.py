# Pypi Dependencies

# Python Library
from datetime import datetime, time

# Modules
from db import db_dependency
from models import UserTable, PetTable, DogBoardingTable, DoggyDayCareTable
from services import bcrypt_context
from enums import UserStatus, PottyBreakFrequency

current_year = datetime.now().year


def add_default_data(db: db_dependency):

    # Add UserTables
    for row in list([
        UserTable(username="Judith", hashed_password=bcrypt_context.hash("BYX.S8CSPqVXER5"), email="judith@gmail.com", date_of_birth=datetime.strptime("2000-01-01", "%Y-%m-%d").date(), status=UserStatus(1), phone_no="1234567890", city="Hamburg", country="Germany", postal_code="10115"),
        UserTable(username="Lena", hashed_password=bcrypt_context.hash(":uY.DemYvm8Lyi."), email="lena@gmail.com", date_of_birth=datetime.strptime("2000-01-01", "%Y-%m-%d").date(), status=UserStatus(1), phone_no="0987654321", city="Hamburg", country="Germany", postal_code="80331"),       

        DogBoardingTable(user_id=1, max_dogs=2,checkin_time=time(8, 0), checkout_time=time(18, 0), multi_family_allowed=True, potty_break_freq={PottyBreakFrequency.TWO_TO_FOUR: True}, is_active=True),
        DoggyDayCareTable(user_id=1, max_dogs=2, checkin_time=time(9, 0), checkout_time=time(17, 0), multi_family_allowed=False, potty_break_freq={PottyBreakFrequency.ZERO_TO_TWO: True}, is_active=True),

        PetTable(
            name="Buddy",
            species="dog",
            gender="male",
            size="medium",
            breed="Golden Retriever",
            yob=current_year - 4,
            photo="https://example.com/photos/buddy.jpg",
            description="Rusty is a goofy, tail-wagging golden retriever mix who lives for belly rubs and mud....",
            spayed_neutured=False,
            microchipped=True,
            vaccinations=True,
            house_trained=False,
            friendly_with={"dogs": True, "cats": False, "kids": True, "adults": True},
            owner_id=1
        ),
        PetTable(
            name="Mittens",
            species="cat",
            gender="female",
            size="small",
            breed="Siamese",
            yob=current_year - 2,
            photo="https://example.com/photos/mittens.jpg",
            description="Pickles is an elegant and independent feline with a love for sunbeams and quiet corners. She’s low...",
            spayed_neutured=True,
            microchipped=True,
            vaccinations=True,
            house_trained=True,
            friendly_with={"dogs": False, "cats": True, "kids": False, "adults": True},
            owner_id=1
        ),
        PetTable(
            name="Charlie",
            species="dog",
            gender="male",
            size="large",
            breed="Beagle",
            yob=current_year - 3,
            photo="https://example.com/photos/charlie.jpg",
            description="Luna is a spirited and intelligent Husky with a big personality and an even bigger heart....",
            spayed_neutured=False,
            microchipped=False,
            vaccinations=True,
            house_trained=False,
            friendly_with={"dogs": True, "cats": False, "kids": True, "adults": False},
            owner_id=1
        ),
        PetTable(
            name="Luna",
            species="cat",
            gender="female",
            size="large",
            breed="Maine Coon",
            yob=current_year - 1,
            photo="https://example.com/photos/luna.jpg",
            description="Luna is a fluffy Maine Coon kitten who’s curious and playful with a big purr.",
            spayed_neutured=False,
            microchipped=True,
            vaccinations=True,
            house_trained=True,
            friendly_with={"dogs": False, "cats": True, "kids": True, "adults": True},
            owner_id=2
        ),
        PetTable(
        name="Rocky",
        species="dog",
        gender="male",
        size="large",
        breed="Boxer",
        yob=current_year - 5,
        photo="https://example.com/photos/rocky.jpg",
        description="Rocky is a strong and loyal Boxer who enjoys running and guarding his home with pride.",
        spayed_neutured=True,
        microchipped=False,
        vaccinations=False,
        house_trained=True,
        friendly_with={"dogs": True, "cats": False, "kids": False, "adults": True},
        owner_id=2
        ),
        PetTable(
        name="Coco",
        species="cat",
        gender="female",
        size="medium",
        breed="Persian",
        yob=current_year - 2,
        photo="https://example.com/photos/coco.jpg",
        description="Coco is a gentle Persian cat with a luxurious coat who loves naps and chin scratches.",
        spayed_neutured=False,
        microchipped=False,
        vaccinations=True,
        house_trained=True,
        friendly_with={"dogs": False, "cats": True, "kids": True, "adults": True},
        owner_id=2
        )]):

        db.add(row)
        db.commit()