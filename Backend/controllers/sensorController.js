const SensorData = require('../models/SensorData');

exports.addSensorData = async (req, res) => {
  const { soilMoisture, temperature, humidity } = req.body;
  try {
    const newData = new SensorData({ soilMoisture, temperature, humidity });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSensorData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};