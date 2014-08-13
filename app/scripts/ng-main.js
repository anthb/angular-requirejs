'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularResource: '../bower_components/angular-resource/angular-resource',
		angularCookies: '../bower_components/angular-cookies/angular-cookies',
		angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
		angularAnimate: '../bower_components/angular-animate/angular-animate',
		angularTouch: '../bower_components/angular-touch/angular-touch',
		angularMocks: '../bower_components/angular-mocks/angular-mocks'
//		text: '../bower_components/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		'angularCookies': ['angular'],
		'angularSanitize': ['angular'],
		'angularAnimate': ['angular'],
		'angularTouch': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'

], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
