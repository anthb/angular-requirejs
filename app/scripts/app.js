'use strict';

/**
 * @ngdoc overview
 * @name wnwangularApp
 * @description
 * # wnwangularApp
 *
 * Main module of the application.
 */
define([
  'angular',
  'angularAnimate',
  'angularCookies',
  'angularResource',
  'angularRoute',
  'angularSanitize',
  'angularTouch',
  ], function(angular, ngAnimate, ngCookies, ngResource, ngRoute, ngSanitize, ngTouch) {

    return angular.module('wnwangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

});

