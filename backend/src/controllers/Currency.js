const currencyService = require('../services/currency.service');

module.exports = async (req, res) => {
  try {
    const result = await currencyService.getCurrencies();
    res.status(200).json({
      success: true,
      message: 'Return currency lists',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get currency lists',
      data: []
    });
  }
};