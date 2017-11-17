import APP_CONFIG from '../config/config';
import request from 'request-promise';

const getTimezones = async () => {
  try {
    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/timezone/getTimezones`,
      method: 'GET',
      json: true
    };
  
    const result = await request(options);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export { getTimezones };
