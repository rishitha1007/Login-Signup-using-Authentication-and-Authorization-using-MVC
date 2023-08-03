// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/update', verifyToken, authController.updateUser); // Protected route for updating user information

module.exports = router;
