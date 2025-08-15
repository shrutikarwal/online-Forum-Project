const express = require('express');
const { signup, login } = require('../controllers/authcontroller');
const protect = require('../middleware/authmiddleware');

const router = express.Router();

// Signup
router.post('/signup', signup);

// Login
router.post('/login', login);

// Protected test route
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Profile accessed successfully',
    user: req.user
  });
});

module.exports = router;
