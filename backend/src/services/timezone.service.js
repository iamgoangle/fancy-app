const Timezone = require('../models/timezones');

const getTimezones = async () => {
  try {
    const result = await Timezone.find({}, { _id: 0 });
    if (!result) {
      throw new Error('Unable to get timezone list');
    }

    return result;
  } catch (err) {
    // console.error(err);
    return err;
  }
};

module.exports = {
  getTimezones
};