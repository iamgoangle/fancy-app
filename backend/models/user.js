const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  admin: Boolean,
  profile: {
    language: String,
    timezone: String,
    currency: String,
    profile_visibility: String,
    message: String,
    category_list: String
  }
});

module.exports = mongoose.model('users', UserSchema);