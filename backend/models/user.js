const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);