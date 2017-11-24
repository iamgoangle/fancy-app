const APP_CONFIG = require('../config');
const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
  return jwt.sign(payload, app.get('superSecret'), {
    algorithm: 'HS256',
    expiresIn: APP_CONFIG.TOKEN.EXPIRE
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, app.get('superSecret'), {
    algorithm: 'HS256',
    expiresIn: APP_CONFIG.TOKEN.EXPIRE
  });
};

const verifyToken = (token) => {
  jwt.verify(token, app.get('superSecret'), (err, decoded) => {
    if (err) throw err;
    return decoded;
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
};