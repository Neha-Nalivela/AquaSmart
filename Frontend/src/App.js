import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SensorData from "./pages/SensorData";
import WeatherForecast from "./pages/WeatherForecast";
import IrrigationControl from "./pages/IrrigationControl";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Irrigation System Dashboard</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sensor-data" element={<SensorData />} />
          <Route path="/weather-forecast" element={<WeatherForecast />} />
          <Route path="/irrigation-control" element={<IrrigationControl />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
