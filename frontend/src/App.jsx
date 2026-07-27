import { useState, useEffect } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL =", API_URL);
function App() {
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Ready To Move");
  const [transaction, setTransaction] = useState("Resale");
  const [furnishing, setFurnishing] = useState("Semi-Furnished");
  const [facing, setFacing] = useState("North");
  const [overlooking, setOverlooking] = useState("Main Road");
  const [ownership, setOwnership] = useState("Freehold");

  const [carpetArea, setCarpetArea] = useState("");
  const [floorNum, setFloorNum] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [balcony, setBalcony] = useState("");

  const [locations, setLocations] = useState([]);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/locations`)
      .then((res) => res.json())
      .then((data) => setLocations(data.locations))
      .catch((err) => console.log(err));
  }, []);

  const handlePredict = async () => {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location,
        status,
        transaction,
        furnishing,
        facing,
        overlooking,
        ownership,
        carpet_area_sqft: Number(carpetArea),
        floor_num: Number(floorNum),
        bathroom: Number(bathroom),
        balcony: Number(balcony),
      }),
    });

    const data = await response.json();
    setPrediction(data.predicted_price);
  };

  return (
    <div className="container">
      <div className="card">

        <div className="title">
          <h1>🏠 House Price Prediction</h1>
          <p>Machine Learning House Price Predictor</p>
        </div>

        <div className="form-group">
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>

            {locations.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Ready To Move</option>
            <option>Almost Ready</option>
          </select>
        </div>

        <div className="form-group">
          <label>Transaction</label>
          <select
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          >
            <option>Resale</option>
            <option>New Property</option>
            <option>Rent/Lease</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Furnishing</label>
          <select
            value={furnishing}
            onChange={(e) => setFurnishing(e.target.value)}
          >
            <option>Semi-Furnished</option>
            <option>Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>

        <div className="form-group">
          <label>Facing</label>
          <select
            value={facing}
            onChange={(e) => setFacing(e.target.value)}
          >
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>

        <div className="form-group">
          <label>Overlooking</label>
          <select
            value={overlooking}
            onChange={(e) => setOverlooking(e.target.value)}
          >
            <option>Main Road</option>
            <option>Garden/Park</option>
            <option>Pool</option>
            <option>Not Available</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ownership</label>
          <select
            value={ownership}
            onChange={(e) => setOwnership(e.target.value)}
          >
            <option>Freehold</option>
            <option>Leasehold</option>
            <option>Power Of Attorney</option>
            <option>Co-operative Society</option>
          </select>
        </div>

        <div className="form-group">
          <label>Carpet Area (sqft)</label>
          <input
            type="number"
            value={carpetArea}
            onChange={(e) => setCarpetArea(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Floor Number</label>
          <input
            type="number"
            value={floorNum}
            onChange={(e) => setFloorNum(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Bathrooms</label>
          <input
            type="number"
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Balcony</label>
          <input
            type="number"
            value={balcony}
            onChange={(e) => setBalcony(e.target.value)}
          />
        </div>

        <button
          className="predict-btn"
          onClick={handlePredict}
        >
          Predict Price
        </button>

        {prediction && (
          <div className="result">
            <p>Estimated House Price</p>

            <h2>
              ₹ {Number(prediction).toLocaleString("en-IN")}
            </h2>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;