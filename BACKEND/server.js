const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files serve karne ka path thoda better specify karna:
app.use(express.static(path.join(__dirname, '..'))); 
// Note: Ye tab kaam karega jab tum React ya frontend build files 'public' folder me rakhoge.
// Agar tumhare frontend files directly parent folder me hain to tumhara original bhi chalega.


// Routes
const timelineRoutes = require('./routes/timelineRoutes');
app.use('/api/timeline', timelineRoutes);
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);
const diaryRoutes = require('./routes/diaryRoutes');
app.use('/api/diary', diaryRoutes);
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);


// Root route serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // If DB connection fails, exit the app
  });

// Error handling middleware (placed at the end)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});
// This code sets up an Express server with MongoDB connection and CORS enabled.
// It serves static files from a 'public' directory and includes routes for handling timeline data.