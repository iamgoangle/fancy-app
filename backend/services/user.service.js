const User = require('../models/user');

const getUserByUsername = async (username) => {
  return User.findOne({ 'username': username }, { password: 0, __v: 0 }, (err, user) => {
    if (err) {
      throw err;
    }
    
    return user;
  });
};

const updateUserPreference = async (request) => {
  const userIdForUpdate = request.userIdForUpdate;
  const payload = request.payload;

  User.update(userIdForUpdate, { $set: { ...payload } }, (err, user) => {
    if (err) {
      throw err;
    }

    return user;
  });
};

module.exports = {
  getUserByUsername,
  updateUserPreference
};