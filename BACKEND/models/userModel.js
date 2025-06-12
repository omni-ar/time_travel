
// This schema defines a User model with fields for name, email, and password.
// The email field is unique, ensuring no two users can have the same email address.const mongoose = require('mongoose');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    default: false, // Free user by default
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
