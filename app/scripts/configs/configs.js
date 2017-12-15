require('../../styles/main.scss');
require('../../../bower_components/angular/angular.js');
require('../../../bower_components/angular-mocks/angular-mocks.js');
require('../../../node_modules/ui-select/dist/select.min')


angular.module("github", ['ui.select', 'ngSanitize'])
    .constant('API_GITHUB', 'https://api.github.com')
    .constant('GET_USER', '/users')
    .constant('SEARCH_USERS', '/search/users?q=')
    .constant('SEARCH_INTERVAL', 500)
    .constant('NO_OF_USERS', 10);