const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimezoneSchema = Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  value: String
});

module.exports = mongoose.model('timezones', TimezoneSchema);