from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.predictor import model, predict_price
from backend.schemas import HouseFeatures

import json
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent

with open(BASE_DIR / "models" / "locations.json", "r") as f:
    locations = json.load(f)


@app.get("/")
def home():
    return {
        "message": "House Price Prediction API",
        "model_loaded": model is not None
    }


@app.get("/locations")
def get_locations():
    return {
        "locations": locations
    }


@app.post("/predict")
def predict(data: HouseFeatures):
    prediction = predict_price(data)

    return {
        "predicted_price": prediction
    }