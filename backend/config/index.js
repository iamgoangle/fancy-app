/**
 * @description TOKEN SETTING
 * @see https://www.npmjs.com/package/jsonwebtoken
 */

const APP_CONFIG = {
  API_SECRET: 'secretfortaskworld',
  MONGO_URL: 'mongodb://localhost/fancy-app',
  TOKEN: {
    EXPIRE: '5m'
  },
  CORS: {
    origin: 'http://localhost:3000',
    credentials: true
  }
};

module.exports = APP_CONFIG;