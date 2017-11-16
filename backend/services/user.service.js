const Users = require('../models/user');

const updateUserPreference = async (request) => {
  console.log('request => ', request);
  const userIdForUpdate = request.userIdForUpdate;
  const payload = request.payload;

  Users.update(userIdForUpdate, { $set: { ...payload } }, (err, user) => {
    if (err) {
      throw err;
    }

    return user;
  });
};

module.exports = {
  updateUserPreference
};