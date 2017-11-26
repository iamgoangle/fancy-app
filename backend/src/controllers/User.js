const User = require('../models/user');
const userService = require('../services/user.service');
const HashService = require('../services/hash.util');

const signup = async (req, res) => {
  const user = await userService.getUserByUsername(req.body.username);

  if (user) {
    res.status(200).json({
      success: false,
      message: 'Username has been taken, please try a new username instead',
      data: {}
    });
  }

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

  const newUser = await demo.save();
  res.status(200).json({
    success: true,
    message: 'Signup successful',
    data: newUser
  });
};

const getUsers = (req, res) => {
  User.find({}, { __v: 0 }, (err, users) => {
    res.status(200).json({
      success: true,
      data: users
    });
  });
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await userService.getUserByUsername(req.params.username);

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

const setUserPreference = async (req, res) => {
  try {
    const user = await userService.setUserPreference(req.body);

    res.status(200).json({
      success: true,
      message: 'User preference has been updated',
      data: {
        user: user.username,
        profile: user.profile
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not update user preference'
    });
  }
};

module.exports = {
  signup,
  getUsers,
  getUserByUsername,
  setUserPreference
};
