module.exports = function(sequelize)
{
    var GroupConversation = sequelize.define('group',{
        groupId:Sequelize.INTEGER,
        message:Sequelize.TEXT,
        img:Sequelize.STRING,
        timeStamp:Sequelize.DATE
    });


    return GroupConversation;
};