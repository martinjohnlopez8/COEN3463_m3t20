var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');
var Scheme = mongoose.schema;
var uri = 'mongodb://admin:password@ds161008.mlab.com:61008/nbadb'
// var uri = 'localhost/16017'
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var nbateams = require('./routes/nbateams');
var users = require('./routes/users');
var contacts = require('./routes/contacts');


var app = express();

mongoose.Promise = global.Promise;
var db = mongoose.connect(uri);

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(usersData.createStrategy());
passport.serializeUser(usersData.serializeUser());
passport.deserializeUser(usersData.deserializeUser());

app.use('/', index);
app.use('/nbateams', nbateams);
app.use('/users', users);
app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
