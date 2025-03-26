const SensorData = require("../models/SensorData");

// Store sensor data
exports.storeSensorData = async (req, res) => {
  try {
    const { soilMoisture, temperature, humidity, waterLevel } = req.body;
    const newSensorData = new SensorData({ soilMoisture, temperature, humidity, waterLevel });
    await newSensorData.save();
    res.status(201).json({ message: "Sensor data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch latest sensor data
exports.getLatestSensorData = async (req, res) => {
  try {
    const latestData = await SensorData.find().sort({ timestamp: -1 }).limit(1);
    res.json(latestData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
