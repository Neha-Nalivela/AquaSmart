import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useUser();
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/sensor-data`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setSensorData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch sensor data');
      }
    };
    fetchSensorData();
  }, []);

  const getCropRecommendation = (type, value) => {
    if (type === 'temperature') {
      if (value < 15) return 'Wheat, Barley';
      if (value < 25) return 'Rice, Maize';
      return 'Sugarcane, Cotton';
    } else if (type === 'moisture') {
      if (value < 30) return 'Millets, Sorghum';
      if (value < 50) return 'Pulses, Vegetables';
      return 'Paddy, Sugarcane';
    }
    return 'No recommendation available';
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <Link to="/" className="btn btn-primary">AQUASMART</Link>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </nav>
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-4">Welcome, {user?.username}!</h1>
        <div className="sensor-data-container">
          {sensorData.map((sensor, index) => (
            <div key={index} className="sensor-card">
              <p><strong>Soil Moisture:</strong> <span onClick={() => setSelectedInfo({ type: 'moisture', value: sensor.moisture })} className="clickable">{sensor.moisture}%</span></p>
              <p><strong>Temperature:</strong> <span onClick={() => setSelectedInfo({ type: 'temperature', value: sensor.temperature })} className="clickable">{sensor.temperature}°C</span></p>
              <p><strong>Humidity:</strong> {sensor.humidity}%</p>
              <p><strong>Timestamp:</strong> {new Date(sensor.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
        {selectedInfo && (
          <div className="recommendation-box">
            <h3>Recommended Crops</h3>
            <p>{getCropRecommendation(selectedInfo.type, selectedInfo.value)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;