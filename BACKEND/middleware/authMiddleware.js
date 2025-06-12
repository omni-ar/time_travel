const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // Check for token in headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next(); // go to next middleware/route
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = protect;
