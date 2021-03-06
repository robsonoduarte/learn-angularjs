var myApp = angular.module("myApp", ['ngRoute']);



myApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/second', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
		.when('/second/:num', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
})




myApp.controller("mainController", ['$scope', '$location', '$log',function($scope,$location,$log) {
	$scope.name = 'Main'

	$log.main = 'Property from main';
	$log.log($log);
	$log.log($scope);

}]);



myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams',function($scope,$location, $log, $routeParams){
	$scope.num = $routeParams.num || 1

	$log.second = 'Property from second';
	$log.log($log);
	$log.log($scope);

}]);




