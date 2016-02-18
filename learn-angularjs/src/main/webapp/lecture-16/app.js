var myApp = angular.module("myApp", []);


myApp.controller("mainController", function($scope,$log) {
	$log.debug($scope);
});



// the the js minify broken the dependency injection of AngularJS
//var myApp=angular.module("myApp",[]);myApp.controller("mainController",function(n,o){o.info(n)});