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
    timezone: Number,
    currency: String,
    profile_visibility: Number,
    message: Number,
    category_list: Number
  }
});

module.exports = mongoose.model('users', UserSchema);