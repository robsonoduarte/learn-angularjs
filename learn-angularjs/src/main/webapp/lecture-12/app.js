var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope) {

});


var searchPeople = function(firstName, lastName, height, age, occupation){
	return 'Robson Duarte'
}



// return the string function -> searchPeople.toString()
console.log(searchPeople)

// invoke the function
console.log(searchPeople())
