const express = require('express');
const sensorController = require('../controllers/sensorController');

const router = express.Router();

router.post('/sensor-data', sensorController.addSensorData);
router.get('/sensor-data', sensorController.getSensorData);

module.exports = router;