// routes/protectedRoute.js
const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/protected', verifyToken, (req, res) => {
  // Only authenticated users with valid tokens can access this route
  res.status(200).json({ message: 'Protected route accessed successfully' });
});

module.exports = router;
