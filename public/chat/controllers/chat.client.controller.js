angular.module('chat').controller('ChatController',['$scope','Socket',function($scope,$Socket){
    $scope.messages = [];
    $scope.on('chatMessage',function(message){
        $scope.messages.push(message);
    });
    $scope.sendMessage = function(){
        var message = {
            text:this.messageText,
        };
        socket.emit('chatMessage',message);
        this.messageText = '';
    };
    $scope.on('$destroy',function(){
        Socket.removeListener('chatMessage');
    })

}


]);