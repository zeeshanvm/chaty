/**
 * Created by Zeeshan on 4/13/16.
 */
exports.signup = function(req,res){

    res.send(' Signup Page')
};

exports.login = function(req, res) {

    if(req.session){

        console.log(req.sessionID);
    }
    res.session = new Date();
    res.render('index',{title:'Welllllcome'});
    //res.send('login Page');

};
exports.loginUser = function(req, res) {
    //console.log("hud0");
    if(req.method === 'POST') {
        var id = req.params.id;
        res.send('Welcome id # ' + id);
        res.end();


    }
};



exports.room = function(req,res){
   res.send('wellcome to rooms');
};


exports.conversation = function(req,res){
    res.send('wellcome to conversation');
};

exports.groupconversation = function(req,res){
    res.send('wellcome to groupConveration');
};
exports.main = function(req,res){
    res.send('wellcome to groupConveration');
};


