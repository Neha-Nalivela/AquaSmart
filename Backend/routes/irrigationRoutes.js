const express = require("express");
const { storeSensorData, getLatestSensorData } = require("../controllers/irrigationController");
const router = express.Router();

router.post("/sensor", storeSensorData);
router.get("/sensor/latest", getLatestSensorData);

module.exports = router;
