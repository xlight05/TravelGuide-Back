const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const helmet = require('helmet');


const PORT = process.env.PORT || 4000;
const {mongoose}=require('./config/connection');
const passportSetup = require('./config/passport-connection');
const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');
const locations = require('./routes/locations');
const restaurants = require('./routes/restaurants');


const app = express();
/**
 * Helment JS NPM Module will secure the web application by setting various HTTP headers.
 * It has follow features
 * dnsPrefetchControl controls browser DNS prefetching
 * frameguard to prevent clickjacking
 * hidePoweredBy to remove the X-Powered-By header
 * hsts for HTTP Strict Transport Security
 * ieNoOpen sets X-Download-Options for IE8+
 * noSniff to keep clients from sniffing the MIME type
 * xssFilter adds some small XSS protections
 */
app.use(helmet());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);
app.use('/locations',locations);
app.use('/restaurants',restaurants);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(PORT, () => {
    console.log(`Server is open on port ${PORT}`);
});


module.exports = app;
