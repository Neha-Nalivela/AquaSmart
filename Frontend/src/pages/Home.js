import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "left" }}>Home Page</h2>
      <p style={{ textAlign: "left" }}>Welcome! Select a section below:</p>
      
      {/* Container for horizontal buttons */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-around", 
        alignItems: "center", 
        padding: "10px",
        background: "#f0f0f0"
      }}>
        <button onClick={() => navigate("/sensor-data")} style={buttonStyle}>📊 Sensor Data</button>
        <button onClick={() => navigate("/weather-forecast")} style={buttonStyle}>⛅ Weather Forecast</button>
        <button onClick={() => navigate("/irrigation-control")} style={buttonStyle}>🚜 Irrigation Control</button>
      </div>
    </div>
  );
};

// Common button styling
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "white",
  borderRadius: "5px",
  transition: "0.3s",
};

export default Home;
