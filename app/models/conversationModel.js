module.exports = function(sequelize)
{
    var Conversation = Sequelize.define('conversation',{
        sender:{
            type:Sequelize.STRING
        },
        reciever:{
            type:Sequelize.STRING
        },
        message:Sequelize.TEXT,
        img:{


        },
        timeStamp:Sequelize.DATE



    })
    return Conversation;

};