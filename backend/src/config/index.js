// =======================================================================
// ==============   @author Teerapong Singthong ==========================
// = DO NOT CHANGE VALUE DIRECTLY IN THIS FILE PLS CONSIDER .env INSTEAD =
// =======================================================================

const APP_CONFIG = {
  API_SECRET: process.env.API_SECRET,
  MONGO_URL: process.env.DB_HOST,
  TOKEN: {
    EXPIRE: process.env.ACCESS_TOKEN_EXPIRED,
    REFRESH: process.env.REFRESH_TOKEN_EXPIRED
  },
  CORS: {
    origin: process.env.CORS_ORIGIN,
    credentials: process.env.CORS_CREDENTIAL
  }
};

module.exports = APP_CONFIG;