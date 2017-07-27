var myApp = angular.module("myApp", ['ngMessages','ngResource']);

myApp.controller("mainController", function($scope,$log,$filter,$resource) {

	$log.log("Hello.");
	$log.info("this is some information.");
	$log.warn("warning.");
	$log.debug("Some debug infomartion while writing my code.");
	$log.error("This was an error");



	$scope.name = 'Robson Duarte';
	$scope.formattedName = $filter('uppercase')($scope.name);



	$log.info($scope.name);
	$log.info($scope.formattedName);


	$log.info($resource);

});
