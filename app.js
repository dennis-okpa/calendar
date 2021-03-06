const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const events = require('./api/events/');
const repeat = require('./api/repeat/');
const accounts = require('./api/accounts/');
const rights = require('./api/rights/');
const roles = require('./api/roles/');
const groupOfRights = require('./api/groupOfRights/');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/events', events);
app.use('/api/repeat', repeat);
app.use('/api/accounts', accounts);
app.use('/api/roles', roles);
app.use('/api/rights', rights);
app.use('/api/groupOfRights', groupOfRights);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
