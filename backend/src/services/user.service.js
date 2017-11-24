const User = require('../models/user');

const getUserByUsername = async (username) => {
  return await User.findOne({ 'username': username }, { password: 0, __v: 0 });
};

const updateUserPreference = async (request) => {
  const userIdForUpdate = request.userIdForUpdate;
  const payload = request.payload;

  return await User.update(userIdForUpdate, { $set: { ...payload } });
};

const setUserPreference = async (payload) => {
  const userIdForUpdate = payload.userIdForUpdate;
  const newProfile = {
    profile: { ...payload.payload }
  };

  return await User.findOneAndUpdate({ username: userIdForUpdate }, { $set: newProfile }, { new: true });
};

module.exports = {
  getUserByUsername,
  updateUserPreference,
  setUserPreference
};