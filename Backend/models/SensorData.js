const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  soilMoisture: { type: Number, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SensorData', SensorDataSchema);