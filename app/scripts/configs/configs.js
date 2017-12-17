window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery.min')
require('../../styles/main.scss');
require('../../../bower_components/bootstrap/dist/js/bootstrap.min')
require('../../../bower_components/bootstrap/dist/css/bootstrap.min.css')
require('../../../bower_components/angular/angular.js');
require('../../../bower_components/angular-mocks/angular-mocks.js');
require('../../../bower_components/angular-sanitize/angular-sanitize.min');
require('../../../bower_components/angular-ui-select/dist/select.min');
require('../../../bower_components/angular-ui-select/dist/select.min.css');

//NOTE: if you change the variable NO_OF_FOLLOWERS_TO_SHOW_IN_A_ROW, then change the variable $numOfImagesInARow in _variables.scss to the same value
// and repackage (i.e., run `webpack` from the root folder in order to generate new bundle.js)

angular.module("github", ['ui.select', 'ngSanitize'])
    .constant('API_GITHUB', 'https://api.github.com')
    .constant('GET_USER', '/users')
    .constant('SEARCH_USERS', '/search/users?q=')
    .constant('SEARCH_INTERVAL', 500)
    .constant('NO_OF_FOLLOWERS_PER_PAGE', 24)
    .constant('NO_OF_FOLLOWERS_TO_SHOW_IN_A_ROW', 5);