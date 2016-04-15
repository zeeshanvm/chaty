process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
var express = require('./config/express');
var sequelize = require('./config/sequelize');
//var sequelize = require('sequelize');


var  app = express();
var db = sequelize();//
module.exports = app;


app.listen(8000);
console.log('server is running on port 8000');