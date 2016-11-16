angular.module("friendsList").service("friendService",function(){

  this.friends =  [{name:"Rob"}, {name:"Jimmy"}, {name:"Kyelle"},
   {name:"Zander"}];
  //explicit,implicate, new
  var secretFriends = [{name:"Trump"},{name:"Obama"}];

  this.pickRandomFriend = function (){
    return Random(this.friends);
  };

  this.addSecretFriend = function (newSecretFriend){
    secretFriends.push(newSecretFriend);
  };

  this.getSecretFriendsWithPassword = function (password){
    if(password ==="omgdonttellanyonehemanwomanhaters"){
      return secretFriends;
    }
  };


});
