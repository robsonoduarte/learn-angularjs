// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope,cityService) {
	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	})

}]);



weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope,$resource,$routeParams,cityService) {
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI =
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily?");

	$scope.weatherResult =
		$scope.weatherAPI.get({q:$scope.city, cnt:$scope.days, units:"metric", appid:"863979fd70e0b430fa19554cc22118fc"})


	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}


}]);