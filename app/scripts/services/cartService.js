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

	var cartService = function() {

		return {
			name: 'Anthony',
			goLog: function() {
				console.log(this.name);
			}
		}
	};

    return angular.module('wnwangularApp')
    	.factory('cartService', cartService);
});