const Timeline = require("../models/timelineModel");

const getYearData = async (req, res) => {
  const year = Number(req.params.year);
  if (!year || isNaN(year)) {
    return res.status(400).json({ message: "Invalid year parameter" });
  }

  try {
    const data = await Timeline.findOne({ year });

    if (data) {
      res.status(200).json({
        year: data.year,
        title: data.title,
        description: data.description || {}, // nested object
        imageUrl: data.imageUrl || null,
        videoUrl: data.videoUrl || null,
      });
    } else {
      res.status(404).json({ message: "Year not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addYearData = async (req, res) => {
  const { year, title, description, imageUrl, videoUrl } = req.body;

  // Validation: description must be an object with expected subfields
  if (
    !year ||
    !title ||
    !description ||
    typeof description !== "object" ||
    !description.globalEvents ||
    !description.cultureAndLifestyle ||
    !description.scienceAndTechnology ||
    !description.artisticMovements
  ) {
    return res.status(400).json({
      message: "Missing or invalid required fields. Ensure 'description' is an object with all 4 subfields.",
    });
  }

  try {
    const newData = new Timeline({
      year: Number(year),
      title,
      description,
      imageUrl: imageUrl || null,
      videoUrl: videoUrl || null,
    });

    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getYearData, addYearData };
// This code defines the timeline controller with two main functions:
// 1. `getYearData`: Fetches data for a specific year from the database.