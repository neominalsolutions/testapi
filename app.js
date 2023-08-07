var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');
const db = require("./helpers/db")
var app = express(); // services.build();
var cors = require('cors')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // razor view engine

app.use(logger('dev'));
app.use(express.json()); // requestten gelen bilgileri json formatına çevir.
app.use(express.urlencoded({ extended: false })); // formdan post edilen bilgileri yakalamak için
app.use(cookieParser()); // uygulamadan cookie değerlerini okumak için 
app.use(express.static(path.join(__dirname, 'public'))); // www root klasörümğz.
// useStaticFiles() middleware aynısı

app.use(cors());

app.use('/', indexRouter); // gelen istekler yönlendirme yapmış
app.use('/api/users', usersRouter);
app.use('/api/todos', todosRouter);

db();


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res nesnesi reponse nesnesi 500 kodu döndür.
  res.status(err.status || 500);
  res.render('error');
});

// export default app yazım şeklinin nodejs formatındaki hali.
module.exports = app;
