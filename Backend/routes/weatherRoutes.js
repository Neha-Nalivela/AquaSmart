const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

const WEATHER_API_KEY = "6c18acd3c52a0174f5f04f9e7cf0087a"; // Your API Key

router.get("/weather", async (req, res) => {
    try {
        const city = "YourCityName"; // Change this dynamically if needed
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

module.exports = router;
