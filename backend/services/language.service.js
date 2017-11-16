const Language = require('../models/languages');

const getLanguages = async () => {
  try {
    const result = await Language.find({}, { _id: 0 });
    if (!result) {
      throw new Error('Enable to get language list');
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getLanguages
};