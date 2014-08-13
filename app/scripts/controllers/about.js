'use strict';

/**
 * @ngdoc function
 * @name wnwangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wnwangularApp
 */

define([
	'angular',
	'app'

], function(angular, app) {

    return angular.module('wnwangularApp')
        .controller('AboutCtrl', function($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
});