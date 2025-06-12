const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    globalEvents: { type: String, required: true },
    cultureAndLifestyle: { type: String, required: true },
    scienceAndTechnology: { type: String, required: true },
    artisticMovements: { type: String, required: true },
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Timeline", timelineSchema);
// This code defines a Mongoose schema for a timeline model.
// It includes fields for year, title, description (with subfields), image URL, and video URL.