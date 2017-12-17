angular.module("github")
    .controller("handle", function ($scope, API_GITHUB, GET_USER, SEARCH_USERS, SEARCH_INTERVAL, NO_OF_FOLLOWERS_PER_PAGE, NO_OF_FOLLOWERS_TO_SHOW_IN_A_ROW, $http, $timeout) {
        /*
        *	@ngDoc - github
        *   @kind object
        *   @description
        *     list - holds the list of users matching the currently typed username
        *     page - current page
        *     selected - holds the username of the selected user
        *     avatar_url - url src of selected user
        *     follower
        *           url - avatar src of the followers of the selected user
        *     followers - count of followers of the selected user
        */
        $scope.github = {
            list: [],
            selected: "",
            page: 1,
            avatar_url: "",
            follower: {
                url: []
            },
            followers: 0,
            number_of_followers_in_a_row: NO_OF_FOLLOWERS_TO_SHOW_IN_A_ROW
        }

        /*
        *	ngDoc searchUserHandle
        *   @kind function
        *   @description - search github with matching username
        */
        searchUserHandle = function (text) {
            $scope.loading = true;
            var method = 'GET';
            var url = API_GITHUB + SEARCH_USERS + text;
            $http({method: method, url: url}).then(function (response) {
                var list = [];
                response.data.items.map((item) => list.push(item.login))
                $scope.github.list = list;
                $scope.loading = false;
            }, function (response) {
                console.log(response);
                $scope.loading = false;
            });
        }

        /*
         *	ngDoc getSelectedUserAPI
         *   @kind function
         *   @description - get selected user information
         */
        getSelectedUserAPI = function (text) {
            $scope.loading = true;
            $scope.github.selected = text;
            var method = 'GET';
            var url = API_GITHUB + GET_USER + "/" + text;
            $http({method: method, url: url}).then(function (response) {
                $scope.github.avatar_url = response.data.avatar_url;
                $scope.github.followers = response.data.followers;
                $scope.github.pages = $scope.github.followers / NO_OF_FOLLOWERS_TO_SHOW_IN_A_ROW;
                $scope.loading = false;
            }, function (response) {
                console.log(response);
                $scope.loading = false;
            })
        }

        /*
         *   ngDoc loadMore
         *   @kind function
         *   @description - load more followers
         */
        $scope.loadMore = function (page_number) {
            $scope.loading = true;
            if (page_number) {
                $scope.github.page = page_number;
            } else {
                $scope.github.page++;
            }
            var method = 'GET';
            var url = API_GITHUB + GET_USER + "/" + $scope.github.selected + "/followers?per_page=" + NO_OF_FOLLOWERS_PER_PAGE + "&page=" + $scope.github.page;
            $http({method: method, url: url}).then(function (response) {
                if (page_number || $scope.github.page == 1) {
                    $scope.github.follower.url = response.data;
                } else {
                    for (var i = 0; i < response.data.length; i++) {
                        $scope.github.follower.url.push(response.data[i]);
                    }
                }
                $scope.loading = false;
            }, function (response) {
                console.log(response);
            })
        }


        /*
        *	ngDoc areThereMoreFollowers
        *   @kind function
        *   @description - return true if there are more followers
        */
        $scope.areThereMoreFollowers = function () {
            return (($scope.github.page * NO_OF_FOLLOWERS_PER_PAGE) < $scope.github.followers)
        }

        /*
         *	ngDoc getMatchingUsers
         *   @kind function
         *   @description - Get matching users, that is fired after the certain interval (SEARCH_INTERVAL)
         */
        $scope.getMatchingUsers = function (text) {
            if ($scope.searchTermPromise) {
                $timeout.cancel($scope.searchTermPromise);
            }
            $scope.searchTermPromise = $timeout(searchUserHandle, SEARCH_INTERVAL, true, text)
        }

        /*
        *	ngDoc getSelectedUser
        *   @kind function
        *   @description - Get matching users
        */
        $scope.getSelectedUser = function (text) {
            $scope.github.page = 0;
            getSelectedUserAPI(text);
            $scope.loadMore();
        }
    });