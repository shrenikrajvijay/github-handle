angular.module("github")
  .controller("handle", function($scope, API_GITHUB, GET_USER, SEARCH_USERS, SEARCH_INTERVAL, NO_OF_USERS, $http, $timeout) {

      // @ngdoc function
      // * @name angular.element
      // * @module ng
      // * @kind function

	/*
	*	ngDoc object - github
	*   @description
	*     list - holds the list of users matching the currently typed username
    *     page - current page
	*     selected - holds the username of the selected user
	*     avatar_url - url src of selected user
	*     follower - url src of the selected user
	*     followers - followers of the selected user
	*/
    $scope.github = {
        list : [],
        selected : "",
        page : 1,
        avatar_url : "",
        follower : {},
        followers : 0
    }

    /*
     *	ngDoc function searchUserHandle
     *   @description - search github with matching username
     */
      searchUserHandle = function(text){
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

      /*
       *	ngDoc function getSelectedUserAPI
       *   @description - get selected user information
       */
      getSelectedUserAPI = function(text){
          $scope.github.selected = text;
          var method = 'GET';
          var url = API_GITHUB+GET_USER+"/"+text;
          $http({method: method, url: url}).
          then(function(response) {
              $scope.github.page = 1;
              $scope.github.avatar_url = response.data.avatar_url;
              $scope.github.followers = response.data.followers;
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

      /*
       *	ngDoc function loadMore
       *   @description - load more followers
       */
        $scope.loadMore = function(){
            $scope.github.page++;
            var method = 'GET';
            var url = API_GITHUB+GET_USER+"/"+$scope.github.selected+"/followers?per_page="+NO_OF_USERS+"&page="+$scope.github.page;
            $http({method: method, url: url}).
            then(function(response) {
                for (var i=0; i<response.data.length; i++){
                    $scope.github.follower.url.push(response.data[i]);
                }
            }, function(response) {
                console.log(response);
            })
        }


     /*
     *	ngDoc function areThereMoreFollowers
     *   @description - return true if there are more followers
     */
      $scope.areThereMoreFollowers = function(){
        return (($scope.github.page * NO_OF_USERS) < $scope.github.followers)
      }

      /*
       *	ngDoc function getMatchingUsers
       *   @description - Get matching users
       */
        $scope.getMatchingUsers = function(text){
            if($scope.searchTermPromise){
                $timeout.cancel($scope.searchTermPromise);
            }
            $scope.searchTermPromise = $timeout(searchUserHandle, SEARCH_INTERVAL, true, text)
        }

      /*
     *	ngDoc function getSelectedUser
     *   @description - Get matching users
     */
      $scope.getSelectedUser = function(text){
          console.log(text);
          getSelectedUserAPI(text);
      }
})