import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import axios from 'axios';
import SensorData from './SensorData';

const Dashboard = () => {
  const { user } = useUser();
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <SensorData data={sensorData} />
    </div>
  );
};

export default Dashboard;