const Razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("../models/userModel");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET, // <-- Fix here
});

exports.createOrder = async (req, res) => {
  try {
    const options = {
      amount: 100 * 100, // ₹100 in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };
    const order = await instance.orders.create(options);
    res.status(200).json({ order });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ message: "Order creation failed", error: err.message });
  }
};

exports.verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (expectedSign === razorpay_signature) {
    // Mark user as premium
    const user = await User.findById(req.user);
    user.isPremium = true;
    await user.save();

    return res.status(200).json({ message: "Payment successful, user upgraded to premium" });
  } else {
    return res.status(400).json({ message: "Invalid payment signature" });
  }
};
