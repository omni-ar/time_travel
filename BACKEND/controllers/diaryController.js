const Diary = require('../models/diaryModel');

exports.createDiaryEntry = async (req, res) => {
  try {
    const { year, entry, media } = req.body;
    const newEntry = await Diary.create({
      user: req.user,
      year,
      entry,
      media,
    });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: "Failed to create diary entry", error: err.message });
  }
};

exports.getDiaryEntries = async (req, res) => {
  try {
    const entries = await Diary.find({ user: req.user }).sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: "Failed to get diary entries", error: err.message });
  }
};
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'time-travel-diary',
    allowed_formats: ['jpg', 'jpeg', 'png', 'mp4'],
  },
});

const upload = multer({ storage });

exports.uploadMedia = upload.array('media', 5); // middleware for route

exports.editDiaryEntry = async (req, res) => {
  try {
    const { entry, year } = req.body;
    const diary = await Diary.findOne({ _id: req.params.id, user: req.user._id });

    if (!diary) return res.status(404).json({ message: 'Diary entry not found' });

    diary.entry = entry || diary.entry;
    diary.year = year || diary.year;
    await diary.save();

    res.status(200).json({ message: 'Entry updated', diary });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

exports.deleteDiaryEntry = async (req, res) => {
  try {
    const diary = await Diary.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!diary) return res.status(404).json({ message: 'Diary not found' });

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
