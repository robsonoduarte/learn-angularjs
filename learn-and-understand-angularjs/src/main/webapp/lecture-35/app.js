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


myApp.controller("mainController", ['$scope', '$location', '$log', function($scope,$location,$log) {
	$scope.person = {
		name: 'Jhon Doe',
		address: '555 Main St., New York, NY 11111'
	}

}]);



myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams', function($scope,$location, $log, $routeParams){

}]);


myApp.directive("searchResult", function() {
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope:{
			personName: "@",
			personAddress: "@"
		}
	}
});




