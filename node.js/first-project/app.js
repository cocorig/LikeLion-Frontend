var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const templateRouter =  require('./routes/template');

const session =  require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  // secret: 암호화하기 위해 설정 
  secret : 'first project',
  // resave : 변경하지않아도 저장할지 저장하지않을지 결정 ,  false 병경하지않으면 저장하지않는다
  resave : false,
  //session이 저장하기 전에 초기화할지 말지 결정
  saveUninitialized : true,
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  미들웨어 생성 , 어떤 요청이 들어와도 이 미들웨어가 한번 씩은 실행 next 다음 라우터에 맞게 실행이됨  -> indexRouter
// app.use((req, res , next) => {
//   console.log('middleware!!');
//   next();
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template' ,  templateRouter)


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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
