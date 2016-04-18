/**
 * Created by Zeeshan on 4/15/16.
 */
module.exports = function(sequelize) {
    var User = sequelize.define('user', {
       userName:{
           type:Sequelize.STRING,
           //unique:true,
           notNull:true,
           //validate :{
           //      notNull:true,
           //}

       },
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name' ,// Will result in an attribute that is firstName when user facing but first_name in the database

        },
        lastName: {
            type: Sequelize.STRING,

        }
    }, {
        instanceMethods: {
            getFullName: function() { return {id:this.id,username:this.userName,firstName:this.firstName,lastName:this.lastName}}
        },

        freezeTableName: true // Model tableName will be the same as the model name
    });
    User.sync({force:false});


 return User;
};