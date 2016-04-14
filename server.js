process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
var express = require('./config/express');
var  app = express();

module.exports = app;

app.listen(8000);
console.log('server is running on port 8000');