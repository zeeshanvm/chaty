var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    session =require('express-session'),
    methodOverride = require('method-override'),
    http = require('http'),
    //socketio = require('socket.io'),
    //sequelize = require('sequelize');
    config = require('./config');

//var uri = '/Users/Atif/Zeeshan/webstorm/ChatApplication/'
module.exports = function()
{
    //console.log(__dirname);

    //var server = http.createServer(app);
    //var io = socketio.listen(server);
    var app = express();

    if(process.env.NODE_ENV === 'development')
    {
        //console.log('hi');
        app.use(morgan('dev'));
    }
    else if(process.env.NODE_ENV === 'production'){

        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended:true

    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set('views', (__dirname+'/../app/views'));
    app.set('view engine','ejs');

    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret


    }));


    app.use(express.static('./public'));
    require('../app/routes/server.routes.js')(app);
    return app;


};