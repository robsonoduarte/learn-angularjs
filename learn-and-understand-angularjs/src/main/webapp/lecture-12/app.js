var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope) {

	// return the string function -> searchPeople.toString()
	console.log(searchPeople)

	// invoke the function
	console.log(searchPeople())
});


var searchPeople = function(firstName, lastName, height, age, occupation){
	return 'Robson Duarte'
}




