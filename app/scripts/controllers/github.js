angular.module("github")
  .controller("handle", function($scope, API_GITHUB, GET_USER, SEARCH_USERS, SEARCH_INTERVAL, NO_OF_USERS, $http, $timeout) {

	/*
	*	ngDoc object
	*  @description holds the user typed handle and the corresponding list of matching users
	*/
    $scope.github = {
        handle : "",
        list : []
    }

    getMatchingUsersAPI = function(text){
      var method = 'GET';
      var url = API_GITHUB+SEARCH_USERS+text;
      $http({method: method, url: url}).
      then(function(response) {
          var list = [];
          response.data.items.map((item) => list.push(item.login))
          $scope.github.list = list;
      }, function(response) {
          console.log(response);
      })
    }

    $scope.nextPage = function(){
        $scope.github.page++;
        var method = 'GET';
        var url = API_GITHUB+GET_USER+"/"+$scope.github.selected+"/followers?per_page="+NO_OF_USERS+"&page="+$scope.github.page;
        $http({method: method, url: url}).
        then(function(response) {
            $scope.github.follower = {}
            $scope.github.follower.url = response.data
        }, function(response) {
            console.log(response);
        })
    }

      $scope.areThereMoreFollowers = function(){
        return (($scope.github.page * NO_OF_USERS) < $scope.github.followers)
      }

      getSelectedUserAPI = function(text){
          var method = 'GET';
          var url = API_GITHUB+GET_USER+"/"+text;
          $http({method: method, url: url}).
          then(function(response) {
              $scope.github.page = 1;
              $scope.github.avatar_url = response.data.avatar_url;
              $scope.github.followers = response.data.followers;
              console.log(response.data)
          }, function(response) {
              console.log(response);
          })

          var method = 'GET';
          var url = API_GITHUB+GET_USER+"/"+text+"/followers?per_page="+NO_OF_USERS+"&page="+$scope.github.page;
          $http({method: method, url: url}).
          then(function(response) {
              $scope.github.follower = {}
              $scope.github.follower.url = response.data
          }, function(response) {
              console.log(response);
          })
      }

    $scope.getMatchingUsers = function(text){
        if($scope.searchTermPromise){
            $timeout.cancel($scope.searchTermPromise);
        }
        $scope.searchTermPromise = $timeout(getMatchingUsersAPI, SEARCH_INTERVAL, true, text)
    }

      $scope.getSelectedUser = function(text){
          getSelectedUserAPI(text);
      }
})