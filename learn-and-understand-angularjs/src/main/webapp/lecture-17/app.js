var myApp = angular.module("myApp", []);


myApp.controller("mainController", ['$scope', '$timeout',function($scope,$timeout) {


	$scope.name = 'Robson Duarte';

	$timeout(function name() {
		$scope.name = "EveryBody";
	}, 3000)

}]);


