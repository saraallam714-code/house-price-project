from pydantic import BaseModel

class HouseFeatures(BaseModel):
    location: str
    status: str
    transaction: str
    furnishing: str
    facing: str
    overlooking: str
    ownership: str

    carpet_area_sqft: float
    floor_num: float
    bathroom: int
    balcony: int