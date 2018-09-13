var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
let bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// For Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

//LIST OF ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', loginRouter);

//CONNECT TO MONGOOSEDB (MLAB)
mongoose.connect('mongodb://admin123:admin123@ds131531.mlab.com:31531/farid_apps');

// var Profile = require('./models/profile');
// var User = require('./models/user');
// Profile = new Profile({
//   id_profile:new mongoose.Types.ObjectId,
//   nama:{
//     first_name:'Farid',
//     last_name:'Ardiansyah',
//   },
//   alamat:'Jl.Bina Taruna no.12 Buciper',
//   img_profile:'no-image.png',
// });
// Profile.save(err=>{
//   if(err) throw err;
  
//   User = new User({
//     id_user:new mongoose.Types.ObjectId,
//     username:'admin',
//     password:'admin',
//     id_profile:Profile._id,
//   });

//   User.save(err=>{
//     if(err) throw err;

//     console.log('Save Sukses');
//   });
// });

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
