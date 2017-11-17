import APP_CONFIG from '../config/config';
import request from 'request-promise';

const getCurrencies = async () => {
  try {
    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/currency/getCurrencies`,
      method: 'GET',
      json: true
    };
  
    const result = await request(options);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export { getCurrencies };
