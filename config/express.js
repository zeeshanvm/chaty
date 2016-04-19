var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    session =require('express-session'),
    methodOverride = require('method-override'),
    http = require('http'),
    socketio = require('socket.io'),
    //sequelize = require('sequelize');
    config = require('./config'),
    app = express();


//var uri = '/Users/Atif/Zeeshan/webstorm/ChatApplication/'
module.exports = function()
{
    //console.log(__dirname);

    var server = http.createServer(app);
    var io = socketio.listen(8080);
    app.use(express.static('public'));

    io.on('connect',function(socket){
    console.log("user has been connected");
        socket.on('input',function(data){

            console.log(data.name+" : "+data.message);


        })

    });
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


    app.use(express.static('./public/chat/views'));
    require('../app/routes/server.routes.js')(app);
    return app;


};