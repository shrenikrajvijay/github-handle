require('../../styles/main.scss');
require('../../../bower_components/angular/angular.js');
require('../../../bower_components/angular-mocks/angular-mocks.js');
require('../../../bower_components/angular-bootstrap/ui-bootstrap.min.jsx');

angular.module("github", ['ui.bootstrap'])
    .constant('API_GITHUB', 'https://api.github.com')
    .constant('GET_USER', 'users')
    .constant('SEARCH_USERS', 'search/users');