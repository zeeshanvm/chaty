var config = require('./config');
    Sequelize = require ('sequelize');


module.exports = function(){

    //console.log('im here');
    //******************* setting up connection *******************
    var sequelize = new Sequelize('database','username','password',{

        host:'localhost',
        dialect: 'sqlite',
        storage: 'dd.sqlite'

    });
    //***************  tables *********************************
    var User =  require('../app/models/userModel')(sequelize);
    var Group =  require('../app/models/groupModel')(sequelize);
    var GroupConversation = require('../app/models/groupConversationModel')(sequelize);
    var Conversation = require('../app/models/conversationModel');
    //******************** Assocaitation ********************************



    //User.build({firstName:'Hudo',lastName:'james'}).save();
    var addUser = function(username,firstName,lastName)
    {
        var usr = User.build();
        usr.userName = username;
        usr.firstName = firstName;
        usr.lastName = lastName;
        //usr.validate();
        usr.save();
    };
    var addmessageToconversation = function(sender,reciever,text,time)
    {
        var con = Conversation.build();
        con.sender = sender;
        con.reciever = reciever;
        con.message = text;
        con.timeStamp = time;
        con.save();

    };


    return sequelize;

}
