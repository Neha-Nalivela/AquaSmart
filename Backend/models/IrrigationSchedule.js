const mongoose = require('mongoose');

const IrrigationScheduleSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  waterAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('IrrigationSchedule', IrrigationScheduleSchema);