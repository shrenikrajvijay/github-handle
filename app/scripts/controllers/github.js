angular.module("github")
  .controller("handle", function($scope, API_GITHUB, GET_USER, SEARCH_USERS, SEARCH_INTERVAL, $http, $timeout) {

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

    $scope.getMatchingUsers = function(text){
        if($scope.searchTermPromise){
            $timeout.cancel($scope.searchTermPromise);
        }
        $scope.searchTermPromise = $timeout(getMatchingUsersAPI, SEARCH_INTERVAL, true, text)
    }

      $scope.getSelectedUser = function(text){
          console.log(text);
      }
})