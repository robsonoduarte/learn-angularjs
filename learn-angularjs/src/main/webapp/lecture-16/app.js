var myApp = angular.module("myApp", []);




/*myApp.controller("mainController", ['$scope', '$log',function($scope,$log) {
	$log.debug($scope);
}]);*/



// correct minification controller using array
myApp.controller("mainController",["$scope","$log",function(o,l){l.debug(o)}]);



// the the js minify broken the dependency injection of AngularJS
//var myApp=angular.module("myApp",[]);myApp.controller("mainController",function(n,o){o.info(n)});