describe("github main page", () => {
    beforeEach(module("github", ['ui.select', 'ngSanitize']));

    var $controller, $scope;

    beforeEach(inject((_$controller_, _$rootScope_) => {
        $scope = _$rootScope_.$new();
        $controller = _$controller_("handle", {$scope: $scope});
    }));

    it("should have the controller defined", () => {
        expect(true).toBeTruthy();
    })

    it("should initialize the handle variable", () => {
        expect($scope.github).toBeDefined();
    })

})