module.exports = function(sequelize)
{
    var Conversation = sequelize.define('conversation',{
        sender:{
            type:Sequelize.STRING
        },
        reciever:{
            type:Sequelize.STRING
        },
        message:Sequelize.TEXT,
        //img:{
        //
        //
        //},
        timeStamp:Sequelize.DATE



    });
    Conversation.sync({force:false});
    return Conversation;

};