'use strict';

/**
 * @ngdoc function
 * @name wnwangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wnwangularApp
 */

define([
    'angular',
    'app'
], function(angular, app) {


    return angular.module('wnwangularApp')
        .controller('MainCtrl', function($scope) {

        	
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

});