var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope) {
	console.log($scope);
});


var searchPeople = function(firstName, $scope, height, age, occupation){
	return 'Robson Duarte'
}

console.log(angular.injector().annotate(searchPeople));