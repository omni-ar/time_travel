const express = require("express");
const router = express.Router();
const { submitContactForm, getAllMessages } = require("../controllers/contactController");

router.post("/submit", submitContactForm);   // POST /api/contact/submit
router.get("/all", getAllMessages);          // GET  /api/contact/all

module.exports = router;
// This code sets up the contact routes for handling contact form submissions and fetching all messages.
// It uses Express.js to define two routes: one for submitting contact messages and another for retrieving all messages.