/**
 * @author  Teerapong, Singthong
 * @description Passport JWT middleware
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const APP_CONFIG = require('../config');

module.exports = (passport) => {
  const jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromHeader('x-access-token');
  jwtOptions.secretOrKey = APP_CONFIG.API_SECRET;

  // TODO: Refactoring. Do it need to check with db every authenticate?
  // [1] Is it enought with jwt.verify?
  passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    User.findOne({ username: jwt_payload.username }, (err, user) => {
      if (err) {
        next(null, err, { message: 'Unauthorized to access' });
      }

      if (user) {
        next(null, user);
      } else {
        next(null, err, { message: 'Unauthorized to access' });
      }
    });
  }));
};