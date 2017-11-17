const User = require('../models/user');
const userService = require('../services/user.service');
const HashService = require('../services/hash.util');

const signup = (req, res, next) => {
  const demo = new User({
    username: req.body.username,
    password: HashService.generateHash(req.body.password),
    admin: true,
    profile: {
      language: 'en',
      timezone: 6,
      currency: 'usd',
      profile_visibility: 0,
      message: 0,
      category_list: 0
    }
  });

  return demo.save(err => {
    if (err) {
      res.status(200).json({ success: false, data: err });
      throw err;
    }

    console.log('User saved successfully');

    res.status(200).json({ success: true, data: demo });
  });
};

const getUsers = (req, res, next) => {
  User.find({}, { __v: 0 }, (err, users) => {
    res.status(200).json({
      success: true,
      data: users
    });
  });
};

const getUserByUsername = async (req, res, next) => {
  try {
    const user = await userService.getUserByUsername(req.params.username);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'x-access-token');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');

    res.status(200).json({
      success: true,
      message: 'Return user data',
      data: {
        user: user.username,
        profile: user.profile
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get user profile lists',
      data: {}
    });
  }
};

const updateUserPreference = async (req, res, next) => {
  try {
    const result = await userService.updateUserPreference(req.body);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'x-access-token');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');

    res.status(200).json({
      success: true,
      message: 'Return user profile',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get user profile lists',
      data: {}
    });
  }
};


module.exports = {
  signup,
  getUsers,
  getUserByUsername,
  updateUserPreference
};
