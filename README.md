# 🏠 House Price Prediction System

## 📌 Project Overview

This project is a Machine Learning web application developed as part of the ITI training program.

The system predicts the price of a house based on several features such as location, status, furnishing, carpet area, number of bathrooms, balconies, floor number, ownership, facing direction, and other property characteristics.

The application consists of:

- Machine Learning model
- FastAPI backend
- React frontend
- REST API communication

---

## ✨ Features

- Predict house prices using a trained Random Forest model
- User-friendly React interface
- FastAPI REST API
- Dynamic location list
- Real-time predictions
- Clean and responsive interface

---

## 🛠 Technologies Used

### Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

### Backend

- FastAPI
- Pydantic
- Uvicorn

### Frontend

- React
- Vite
- Bootstrap

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```
house-price-project/
│
├── backend/
│   ├── app.py
│   ├── predictor.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── models/
│   ├── house_price_model.pkl
│   ├── feature_columns.pkl
│   └── locations.json
│
├── notebooks/
│   └── house_price_model.ipynb
│
└── README.md
```

---

## 🚀 How to Run

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### GET

```
/locations
```

Returns all available locations.

---

### POST

```
/predict
```

Returns the predicted house price.

---

## 📷 Application

The application allows users to:

- Select house location
- Select property details
- Enter house specifications
- Predict the estimated house price

---

## 📈 Machine Learning Model

Algorithm used:

- Random Forest Regressor

Data preprocessing includes:

- Missing value handling
- Feature engineering
- One-Hot Encoding
- Feature scaling where required

---

## 👨‍💻 Developed By

ITI Machine Learning Project