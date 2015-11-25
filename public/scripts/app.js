var App = angular.module('angularApp', ['ngRoute']);

App.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		} )
		.when('/trends', {
			templateUrl: 'templates/trends.html',
			controller: 'trendsCtrl'
		} )
		.when('/description', {
			templateUrl: 'templates/description.html',
			controller: 'descriptionCtrl'
		} )
		.when('/search', {
			templateUrl: 'templates/search.html',
			controller: 'searchCtrl'
		} )
		.otherwise({
			redirectTo: '/home'
		} );

} );






