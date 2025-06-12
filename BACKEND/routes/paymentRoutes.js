const express = require("express");
const { createOrder, verifyPayment } = require("../controllers/paymentController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create-order", protect, createOrder);
router.post("/verify", protect, verifyPayment);

module.exports = router;
// This code sets up the payment routes for creating and verifying payments.
// It uses Express.js to define two routes: one for creating a payment order and another for verifying the payment.