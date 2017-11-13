const UserRoute = require('express').Router();
const User = require('../models/user');
const HashService = require('../services/hash.util');

const signup = (req, res, next) => {
  const demo = new User({
    username: req.body.username,
    password: HashService.generateHash(req.body.password),
    admin: true
  });

  return demo.save((err) => {
    if (err) {
      res.status(200).json({ success: false, data: err });
      throw err;
    }

    console.log('User saved successfully');

    res.status(200).json({ success: true, data: demo });
  });
};

const getUsers = (req, res, next) => {
  console.log(req);
  User.find({}, { __v: 0 }, (err, users) => {
    res.status(200).json({
      success: true,
      data: users
    });
  });
};

module.exports = {
  signup,
  getUsers
};