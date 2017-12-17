angular.module("github")
    .directive('loading', function () {
        return {
            restrict: 'E',
            replace:true,
            template: '<div class="loading-div"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" /></div>',
            link: function (scope, element, attr) {
                scope.$watch('loading', function (val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    });