const APP_CONFIG = require('../config');
const timezoneService = require('../services/timezone.service');

module.exports = async (req, res, next) => {
  try {
    const result = await timezoneService.getTimezones();
    res.status(200).json({
      success: true,
      message: 'Return timezone lists',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get timezone lists',
      data: []
    });
  }
};