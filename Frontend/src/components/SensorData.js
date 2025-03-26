import React, { useState, useEffect } from "react";
import axios from "axios";

const SensorData = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/irrigation/sensor/latest")
      .then(response => setSensorData(response.data[0]))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Latest Sensor Data</h2>
      {sensorData ? (
        <ul>
          <li>Soil Moisture: {sensorData.soilMoisture}%</li>
          <li>Temperature: {sensorData.temperature}°C</li>
          <li>Humidity: {sensorData.humidity}%</li>
          <li>Water Level: {sensorData.waterLevel}%</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SensorData;
