module.exports = function(app)
{
 var index = require('../controllers/server.controller.js');
    app.get('/login', index.login);
    //app.get('/',index.main);
    app.get('/room',index.room);
    app.get('/groupConv',index.groupconversation);
    app.get('/signup',index.signup);
    app.get('/conversation',index.conversation);
    app.post('/signup',index.signup);
    app.post('/login/:id',index.loginUser);

}
