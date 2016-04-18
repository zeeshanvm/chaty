var config =  require('./config'),
    cookieParser = require('cookie-parser');

module.exports = function(server,io){

    io.use(function(socket,next){
    cookieParser(config.sessionSecret)(socket.request,{},function(err){
    });

    });

    io.on('connection',function(socket){

        require('../app/controllers/server.chat.server.controller')(io,socket);

    })

};
