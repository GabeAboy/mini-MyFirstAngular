angular.module('friendsList');



angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Connor','Sean','Rick','James'];
  $scope.name = " Gabe";
  $scope.newFriend = 'Input a new friend!';

  $scope.addFriend = function(newFriend){
    $scope.friends.push(newFriend);
    $scope.newFriend = "Input a new friend!";
  };
});
