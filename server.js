process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
var express = require('./config/express');
//var sequelize = require('./config/sequelize');
var sql = require('./app/dbcontrollers/db');
//var sequelize = require('sequelize');


var  app = express();
//var db = sequelize();//
var run = sql();
module.exports = app;


app.listen(8000);
console.log('server is running on port 8000');