from pathlib import Path
import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "house_price_model.pkl"
FEATURES_PATH = BASE_DIR / "models" / "feature_columns.pkl"

model = joblib.load(MODEL_PATH)
feature_columns = joblib.load(FEATURES_PATH)


def prepare_input(data):
    input_df = pd.DataFrame(0, index=[0], columns=feature_columns)

    # Numeric features
    input_df.loc[0, "carpet_area_sqft"] = data.carpet_area_sqft
    input_df.loc[0, "floor_num"] = data.floor_num
    input_df.loc[0, "Bathroom"] = data.bathroom
    input_df.loc[0, "Balcony"] = data.balcony

    # Location
    location_col = f"location_{data.location.lower()}"
    if location_col in input_df.columns:
        input_df.loc[0, location_col] = 1

    # Transaction
    transaction_col = f"Transaction_{data.transaction}"
    if transaction_col in input_df.columns:
        input_df.loc[0, transaction_col] = 1

    # Furnishing
    furnishing_col = f"Furnishing_{data.furnishing}"
    if furnishing_col in input_df.columns:
        input_df.loc[0, furnishing_col] = 1

    # Facing
    facing_col = f"facing_{data.facing}"
    if facing_col in input_df.columns:
        input_df.loc[0, facing_col] = 1

    # Overlooking
    overlooking_col = f"overlooking_{data.overlooking}"
    if overlooking_col in input_df.columns:
        input_df.loc[0, overlooking_col] = 1

    # Ownership
    ownership_col = f"Ownership_{data.ownership}"
    if ownership_col in input_df.columns:
        input_df.loc[0, ownership_col] = 1

    return input_df


def predict_price(data):
    input_df = prepare_input(data)
    prediction = model.predict(input_df)[0]
    return float(prediction)