const AuthenticationRoute = require('express').Router();
const jwt = require('jsonwebtoken');
const HashService = require('../services/hash.util');
const APP_CONFIG = require('../config');

const User = require('../models/user');

const authenticate = (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      // Found a user
      if (HashService.compareHash(user.password, req.body.password)) {
        const payload = {
          username: user.username,
          admin: user.admin,
          profile: user.profile
        };

        // generate token with payload
        const token = jwt.sign(payload, app.get('superSecret'), {
          algorithm: 'HS256',
          expiresIn: APP_CONFIG.TOKEN.EXPIRE
        });

        res.status(200).json({
          success: true,
          message: 'Logged-in success',
          data: {
            user: user.username,
            token: token,
            profile: user.profile
          }
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Bad credentials.'
        });
      }
    }
  });
};

module.exports = authenticate;
