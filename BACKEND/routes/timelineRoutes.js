const express = require('express');
const router = express.Router();
const { getYearData, addYearData } = require('../controllers/timelineController');
const Timeline = require('../models/timelineModel');

// @desc Get data for a specific year
// @route GET /api/timeline/:year
router.get('/:year', getYearData);

// @desc Add year data
// @route POST /api/timeline
router.post('/', addYearData);

// @desc Add sample events for years 1100 to 2100
// @route POST /api/timeline/generate
router.post('/generate', async (req, res) => {
  const events = [];
  for (let year = 1100; year <= 2100; year += 100) {
    events.push({
      year,
      title: `Sample Event of Year ${year}`,
      description: `Something interesting happened in the year ${year}.`,
      imageUrl: `https://via.placeholder.com/300x200.png?text=Year+${year}`,
      videoUrl: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4` // example video
    });
  }

  try {
    await Timeline.insertMany(events);
    res.status(201).json({ message: 'Dummy data added for 1100 to 2100' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add dummy data', error });
  }
});



module.exports = router;
// This code defines the routes for the timeline API.
// It includes routes to get data for a specific year, add new year data, and add sample data for testing purposes.