const express = require('express');
const router = express.Router();
const { createDiaryEntry, getDiaryEntries, uploadMedia } = require('../controllers/diaryController');
const protect = require('../middleware/authMiddleware');
const checkPremium = require('../middleware/premiumMiddleware');

// Only premium users can access these routes
router.post('/add', protect, checkPremium, createDiaryEntry);
router.get('/my', protect, checkPremium, getDiaryEntries);

// Media upload route (protected, but not premium-only)
router.post('/upload', protect, uploadMedia, (req, res) => {
  const urls = req.files.map(file => file.path);
  res.status(200).json({ urls });
});
const { editDiaryEntry } = require('../controllers/diaryController');
router.put('/edit/:id', protect, editDiaryEntry);

const { deleteDiaryEntry } = require('../controllers/diaryController');
router.delete('/delete/:id', protect, deleteDiaryEntry);

module.exports = router;