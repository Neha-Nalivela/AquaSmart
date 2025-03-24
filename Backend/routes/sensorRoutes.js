const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor'); // Ensure this model exists

// API route to get sensor data
router.get('/sensor-data', async (req, res) => {
    try {
        const data = await Sensor.find();  // Fetch sensor data from DB
        res.json(data);
    } catch (error) {
        console.error("Error fetching sensor data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
