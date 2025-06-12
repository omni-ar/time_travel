const Contact = require("../models/contactModel");

const submitContactForm = async (req, res) => {
  try {
    console.log("Contact form data:", req.body); // ✅ Yeh line add kar
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};


const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ submittedAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve messages." });
  }
};

module.exports = { submitContactForm, getAllMessages };
// This code defines the contact controller for handling contact form submissions and fetching messages.
// It exports two functions: `submitContactForm` for saving contact messages to the database,