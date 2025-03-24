const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController'); // ✅ Correct Import
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser); // ✅ Make sure this function exists

module.exports = router;
