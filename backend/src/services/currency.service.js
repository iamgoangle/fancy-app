const Currency = require('../models/currencies');

const getCurrencies = async () => {
  try {
    const result = await Currency.find({}, { _id: 0 });
    if (!result) {
      throw new Error('Unable to get currency list');
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getCurrencies
};