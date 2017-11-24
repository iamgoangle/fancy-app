const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  value: String
});

module.exports = mongoose.model('languages', LanguageSchema);