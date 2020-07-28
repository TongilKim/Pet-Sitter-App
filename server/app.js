const createError = require('http-errors');
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const pingRouter = require('./routes/ping');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const paymentRouter = require('./routes/payment');
const requestRouter = require('./routes/request');
const jobRouter = require('./routes/job');
const messageRouter = require('./routes/message');
const passport = require('./passport');
const session = require('express-session');

const { json, urlencoded } = express;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established!');
});
mongoose.set('useFindAndModify', false);

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false, //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use('/', indexRouter);
app.use('/ping', pingRouter);
app.use('/profile', profileRouter);
app.use('/users', usersRouter);
app.use('/payment', paymentRouter);
app.use('/request', requestRouter);
app.use('/job', jobRouter);
app.use('/message', messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
