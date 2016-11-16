angular.module("friendsList").controller("mainCtrl", function($scope,friendService){

    $scope.name = "Jeremy";

    //$scope.friends = [{name:"Rob"}, {name:"Jimmy"}, {name:"Kyelle"}, {name:"Zander"}];
    $scope.friends = friendService.friends;
    // $scope.secretFriends= friendService.getSecretFriendsWithPassword("Open sesame");

    $scope.addFriend = function(){

        //Get whats in input box //Add that to the array
        //had to push an object before $scope.newFriend

        $scope.friends.push({name:$scope.newFriend});

        //Clear out input box
        $scope.newFriend = "";
    };
    $scope.isNaughty = false;
    $scope.toggleGoodness = function(friendObj){
      if(friendObj.isNaughty){
        friendObj.isNaughty = !friendObj.isNaughty;
      }
      else{
        friendObj.isNaughty=true;
        console.log(friendObj);
      }
    };
});
