const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  value: String
});

module.exports = mongoose.model('currencies', CurrencySchema);