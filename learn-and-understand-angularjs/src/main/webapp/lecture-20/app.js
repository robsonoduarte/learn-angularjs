var myApp = angular.module("myApp", []);


myApp.controller("mainController", ['$scope', '$filter', '$timeout',function($scope,$filter,$timeout) {

	$scope.handle = '';

	$scope.loweCaseHandle = function () {
		return $filter('lowercase')($scope.handle);
	}




	$scope.$watch('handle', function(newValue, oldValue) {
		console.log("old: " + oldValue);
		console.log("new: " + newValue);
	})




	// with js timeout function and $apply angular js
	setTimeout(function() {
		$scope.$apply(function() {
			$scope.handle = 'jstimeout';
			console.log('Scope change by js timeout! ');
		})
	}, 3000)




	$timeout(function() {
		$scope.handle = 'timeoutservice';
		console.log('Scope change by timeout angular js service! ');
	}, 4000)



}]);


