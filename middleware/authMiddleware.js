const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    console.log(token)
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    const isAuthorized = jwt.verify(token,'your_secret_key')
    if(!isAuthorized) return res.status(401).json({ message: 'Unauthorized' });
    // req.userId = decoded.userId;
    console.log('here')
    next();
  } catch (error) {
    res.send(error) 
  }
};

module.exports = { verifyToken };
