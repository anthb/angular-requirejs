'use strict';

define([
    'angular',
    'app',
    'controllers/main',
    'controllers/about'
], function(angular, app) {

    return app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
});