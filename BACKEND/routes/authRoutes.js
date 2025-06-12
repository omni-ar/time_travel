
// This code sets up authentication routes for user signup and login.
// It uses Express.js to define two routes: one for user registration and another for user login.
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// @route   POST /api/auth/signup
// @desc    Register new user
router.post('/signup', signup);

// @route   POST /api/auth/login
// @desc    Login existing user

router.post('/login', login);
router.post("/google-login", async (req, res) => {
  const { id_token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
        password: "GOOGLE_LOGIN", // or leave null if password not required
        isPremium: false
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, user: { isPremium: user.isPremium } });
  } catch (err) {
    console.error("Google login failed", err);
    res.status(400).json({ message: "Invalid Google token" });
  }
});

module.exports = router;