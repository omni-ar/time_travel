const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose.
// It exports a function that attempts to connect to the database using the URI stored in the environment variable MONGO_URI.