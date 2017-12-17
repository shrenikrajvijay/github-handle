'use strict'

describe("Github controller - ", () => {

    beforeEach(function(){
        module("github", function($provide){
            $provide.constant("NO_OF_FOLLOWERS_PER_PAGE", 10)
        });
    });

    var $githubController;
    var $scope;
    var $httpBackend;
    var $timeout

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;
        $githubController = $controller("handle", {$scope: $scope});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenRoute('GET', $scope.API_GITHUB+ $scope.SEARCH_USERS)
            .respond(function(method, url, data, headers, params) {
                return [200, { 'items' : [{"login" : "vij"}, {"login" : "vija"}, {"login" : "vijay" }]}];
            });
        $httpBackend.whenRoute('GET', $scope.API_GITHUB+ $scope.GET_USER+"/"+ $scope.github.selected + "/followers?per_page=" + $scope.NO_OF_FOLLOWERS_PER_PAGE + "&page=" + $scope.github.page)
            .respond(function(method, url, data, headers, params) {
                return [200, ["vij", "vija", "vijay" ]];
            });
    }));

    it("should have defined github object", () => {
        expect($scope.github).toBeDefined();
    })

    it("should have defined loadMore function", () => {
        expect($scope.loadMore).toBeDefined();
    })

    it("should have defined areThereMoreFollowers function", () => {
        expect($scope.areThereMoreFollowers).toBeDefined();
    })

    it("should have defined getMatchingUsers function", () => {
        expect($scope.getMatchingUsers).toBeDefined();
    })

    it("should have defined getSelectedUser function", () => {
        expect($scope.getSelectedUser).toBeDefined();
    })

    describe("testing areThereMoreFollowers function - ", () => {
        beforeEach(function(){
            $scope.github.followers = 100;
        })

        it("should return true if there are more followers", () => {
            $scope.github.page = 8;
            expect($scope.areThereMoreFollowers()).toBeTruthy();
        })

        it("should return false if there are no more followers", () => {
            $scope.github.page = 12;
            expect($scope.areThereMoreFollowers()).toBeFalsy();
        })
    })

    describe("testing searchUserHandle function - ", () => {

        it("should return the list of userhandles", () => {
            //$httpBackend.expectGET($scope.API_GITHUB+ $scope.SEARCH_USERS);
            $scope.getMatchingUsers('vij')
            $timeout.flush();
            $httpBackend.flush();
            expect($scope.github.list).toEqual(["vij", "vija", "vijay"])
        })
    })

    // describe("testing loadMore function - ", () => {
    //
    //     it("should return further list of followers", inject((API_GITHUB, GET_USER, NO_OF_FOLLOWERS_PER_PAGE) => {
    //         $scope.github.selected = "vijay";
    //         $httpBackend.expectGET(API_GITHUB + GET_USER + "/" + $scope.github.selected + "/followers?per_page=" + NO_OF_FOLLOWERS_PER_PAGE + "&page=" + $scope.github.page);
    //         $scope.loadMore();
    //         //$httpBackend.flush();
    //         expect($scope.github.page).toBe(2);
    //         expect($scope.github.follower.url).toEqual(["vij", "vija", "vijay"])
    //     }))
    // })

})
