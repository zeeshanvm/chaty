
module.exports = function(io,sockect){

    io.emit('chatMessage',{


        type:'status',
        text:'connected',
        createdAt:Date.now(),
        username:'Avien'

    });
    sockect.on('chatMessage',function(message){

        message.type = 'message';
        message.createdAt = Date.now();
        message.username = 'Avien';

    io.emit('chatMessage',message);
    });
    sockect.on('disconnect',function(){
        io.emit('chatMessage',{

            type:'status',
            text:'diconnected',
            createdAt:Date.now(),
            username:'Avien'


        });
    });


};