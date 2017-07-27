var myApp = angular.module("myApp", []);


myApp.controller("mainController", ['$scope', '$filter', '$http',function($scope,$filter,$http) {

	$scope.handle = '';

	$scope.loweCaseHandle = function () {
		return $filter('lowercase')($scope.handle);
	}

	$scope.characters = 5;


	$http.get('/learn-angularjs/api/lecture23')
		 .success(function(result) {
			 $scope.rules = result;
		 })
		 .error(function(data, status) {
		 	console.log(data)
		 })



	$scope.newRule = '';
	$scope.addRule = function() {

		$http.post('/learn-angularjs/api/lecture23', { 'ruleName': $scope.newRule})
		.success(function(result) {
			$scope.rules = result;
			$scope.newRule = '';
		})
		.error(function(data, status) {
			console.log(data);
		})
	}
}]);


