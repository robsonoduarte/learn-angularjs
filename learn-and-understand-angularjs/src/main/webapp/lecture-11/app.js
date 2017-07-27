var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope) {

	$scope.name = 'Robson';
	$scope.occupation = 'Developer';


	$scope.getName = function() {
		return 'Robson Duarte'
	}

	console.log($scope);
});


