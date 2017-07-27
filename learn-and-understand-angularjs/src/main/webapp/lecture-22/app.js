var myApp = angular.module("myApp", []);


myApp.controller("mainController", ['$scope', '$filter',function($scope,$filter) {

	$scope.alerClick = function() {
		alert('clicked')
	}


	$scope.name = 'Robson Duarte'
}]);


