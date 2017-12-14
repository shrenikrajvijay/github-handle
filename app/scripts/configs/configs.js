require('../../styles/main.scss');
require('../../../bower_components/angular/angular.js');
require('../../../bower_components/angular-mocks/angular-mocks.js');

angular.module("github", [])
    .constant('API_GITHUB', 'https://api.github.com')
    .constant('GET_USER', 'users')
    .constant('SEARCH_USERS', 'search/users');