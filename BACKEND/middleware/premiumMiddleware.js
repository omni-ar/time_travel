const User = require('../models/userModel');

const checkPremium = async (req, res, next) => {
  try {
    const user = await User.findById(req.user); // `req.user` is set by authMiddleware
    if (!user || !user.isPremium) {
      return res.status(403).json({ message: "Access denied. Not a premium user." });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Premium check failed.", error: err.message });
  }
};

module.exports = checkPremium;
// This middleware checks if the user is a premium user before allowing access to certain routes.
// It retrieves the user from the database using the ID stored in `req.user` (set by the auth middleware).