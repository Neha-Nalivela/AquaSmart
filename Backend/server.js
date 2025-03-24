require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());  // Middleware to parse JSON body


// Database Connection
connectDB();

// Routes
//app.use('/api', sensorRoutes);
app.use("/api", require("./routes/weatherRoutes"));
app.use("/api", require("./routes/sensorRoutes"));
app.use('/api', userRoutes);

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});