const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  soilMoisture: Number,
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
