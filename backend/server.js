global.logger = require('./services/logger.util');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const helmet = require('helmet');

const APP_CONFIG = require('./config');
global.app = express();

// =======================
// passport ==============
// =======================
app.use(passport.initialize());
require('./config/passport')(passport);
// passport.use('jwt', require('./config/passport')(passport));

// =======================
// configuration =========
// =======================
const port = process.env.PORT || 5000;

try {
  mongoose.connect(APP_CONFIG.MONGO_URL, {
    useMongoClient: true
  });
  mongoose.Promise = global.Promise;
} catch (err) {
  logger.error(err);
}

app.set('superSecret', APP_CONFIG.API_SECRET);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// =======================
// security ==============
// =======================
app.use(helmet());
app.disable('x-powered-by');

const corsOption = { ...APP_CONFIG.CORS };
app.use(cors(corsOption));

// =======================
// route =================
// =======================
const UserController = require('./controllers/User');
const CurrencyController = require('./controllers/Currency');
const TimezoneController = require('./controllers/Timezone');
const LanguageController = require('./controllers/Language');
const Authentication = require('./controllers/Authentication');

// authentication
app.post('/api/login', Authentication);

// user
app.post('/api/user/signup', UserController.signup);
app.options('/api/user/:username');
app.post('/api/user/:username',
  passport.authenticate('jwt', ({ session: false })),
  UserController.getUserByUsername
);
app.options('/api/user/changePreference');
app.post('/api/user/changePreference',
  passport.authenticate('jwt', ({ session: false })),
  UserController.getUserByUsername
);
app.get('/api/user/getUsers',
  passport.authenticate('jwt', ({ session: false })), 
  UserController.getUsers
);

// currency
app.get('/api/currency/getCurrencies', CurrencyController);

// timezone
app.get('/api/timezone/getTimezones', TimezoneController);

// language
app.get('/api/language/getLanguages', LanguageController);

app.listen(port, () => {
  console.log(`Start the server at http://localhost:${port}`);
  console.log(`CORS-enabled web server with options ${JSON.stringify(corsOption)}`);
});