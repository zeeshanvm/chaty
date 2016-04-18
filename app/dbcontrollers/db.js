/**
 * Created by Zeeshan on 4/18/16.
 */
var seq = require('../../config/sequelize');

var sequelize = seq();
module.exports = function(){
////***************  tables *********************************
var User =  require('./../models/userModel')(sequelize);
var Group =  require('./../models/groupModel')(sequelize);
var GroupConversation = require('./../models/groupConversationModel')(sequelize);
var Conversation = require('./../models/conversationModel')(sequelize);
//******************** Assocaitation ********************************



User.build({firstName:'Hudo',lastName:'james'}).save();
var addUser = function(username,firstName,lastName)
{
    var usr = User.build();
    usr.userName = username;
    usr.firstName = firstName;
    usr.lastName = lastName;
    //usr.validate();

    usr.save().then(function(){
        console.log('saved')
    });
};
var addmessageToconversation = function(sender,reciever,text,time)
{
    var con = Conversation.build();
    //con.sender = sender;
    //con.reciever = reciever;
    //con.message = text;
    //con.timeStamp = time;

    con.sender = 'gooof';
    con.reciever = 'doof';
    con.message = 'boof';
    con.timeStamp = 12/12/2012;
    con.save();

};
    addUser('abc','efg','pkr');
    addmessageToconversation();

}
