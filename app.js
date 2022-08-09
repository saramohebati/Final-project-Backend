require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const userRouter = require('./src/module/users/router.js');
const AuthMiddleware = require('./src/core/middleware/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: ["http://localhost:3000"]}));

app.use('/users', userRouter);
app.post('/login', AuthMiddleware.login);

module.exports = app;
