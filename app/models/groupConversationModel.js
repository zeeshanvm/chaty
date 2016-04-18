module.exports = function(sequelize)
{
    var GroupConversation = sequelize.define('groupConversation',{
        groupId:Sequelize.INTEGER,
        message:Sequelize.TEXT,
        img:Sequelize.STRING,
        timeStamp:Sequelize.DATE
    });

    GroupConversation.sync({force:false});
    return GroupConversation;
};