const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Register
router.post('/register', registerUser);

// ✅ Login
router.post('/login', loginUser);

// ✅ Get logged in user profile
router.get('/me', protect, getMe);

module.exports = router;
