const User = require('../models/User'); // Import the User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    console.log("Register request received:", req.body);
    let { username, email, password, role } = req.body;

    // Trim inputs to avoid accidental spaces
    username = username.trim();
    email = email.trim().toLowerCase();
    password = password.trim();

    // Validate inputs
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if the username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword, role });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });

  } catch (error) {
    console.error("Register Error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email or username already exists." });
    }

    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Trim inputs
    email = email.trim().toLowerCase();
    password = password.trim();

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000, // 1 hour
    });

    res.json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email, role: user.role },
      token
    });

  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};
