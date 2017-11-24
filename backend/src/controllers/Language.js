const APP_CONFIG = require('../config');
const languageService = require('../services/language.service');

module.exports = async (req, res, next) => {
  try {
    const result = await languageService.getLanguages();
    res.status(200).json({
      success: true,
      message: 'Return language lists',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get language lists',
      data: []
    });
  }
};