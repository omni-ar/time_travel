const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  year: { type: Number, required: true },
  entry: { type: String },
  media: [{ type: String }], // Array of image/video URLs
}, { timestamps: true });

module.exports = mongoose.model('Diary', diarySchema);
// This schema defines a Diary model with fields for user, year, entry, and media.
// The user field references the User model, allowing for association with a specific user.