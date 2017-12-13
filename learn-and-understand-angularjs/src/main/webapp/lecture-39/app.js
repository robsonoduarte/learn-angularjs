var myApp = angular.module("myApp", ['ngRoute']);



myApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/second', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
		.when('/second/:num', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
})


myApp.controller("mainController", ['$scope', '$location', '$log', function($scope,$location,$log) {

	$scope.people = [{
		name: 'Jhon Doe',
		address: '555 Main St.',
		city: 'New York',
		state: 'NY',
		zip: '11111'
	},
	{
		name: 'Jane Doe',
		address: '333 Second St.',
		city: 'Buffalo',
		state: 'NY',
		zip: '22222'
	},
	{
		name: 'George Doe',
		address: '111 Third St.',
		city: 'Miami',
		state: 'FL',
		zip: '33333'
	}]

	$scope.formattedAddress = function(person) {
		return person.address + ', '
			+ person.city + ', '
			+ person.state + ' '
			+ person.zip;
	}

}]);



myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams', function($scope,$location, $log, $routeParams){

}]);


myApp.directive("searchResult", function() {
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope:{
			personObject: "=",
			formattedAddressFunction: "&"
		},
		compile: function(elem, attrs) {
			console.log('Compiling...');
			console.log(elem.html());

			return{
				pre: function(scope,elements,attrs) {
					console.log('Pre-linking...')
					console.log(elements);
				},
				post: function(scope,elements,attrs) {
					console.log('Post-linking...')
					console.log(scope);

					if(scope.personObject.name == 'Jane Doe'){
						elements.removeAttr('class')
					}


					console.log(elements);

				}
			}
		}
	}
});



