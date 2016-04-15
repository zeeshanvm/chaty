/**
 * Created by Zeeshan on 4/15/16.
 */
module.exports = function(sequelize)
{
    var Group = sequelize.define('group',{
        groupId:Sequelize.INTEGER
     })
return Group;
};