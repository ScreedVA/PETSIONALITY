from enum import Enum

class UserStatus(Enum):
	INACTIVE = 0
	ACTIVE = 1

class PottyBreakFrequency(str, Enum):
    ZERO_TO_TWO = "0-2"
    TWO_TO_FOUR = "2-4"
    FOUR_TO_SIX = "4-6"
    EIGHT_PLUS = "8+"

class AvailableTimeSlot(str, Enum):
    MORNING = "6:00-11:00"
    MIDDAY = "11:00-15:00"
    EVENING = "15:00-22:00"