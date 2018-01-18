// SERVICES
weatherApp.service('cityService', function() {
	this.city = "London"
});

weatherApp.service('weatherService', [ '$resource', function($resource)] {

	this.GetWeather = function(city,day){		
		var weatherAPI =
			$resource("http://api.openweathermap.org/data/2.5/forecast/daily?");

		return weatherAPI.get({q:city, cnt:days, units:"metric", appid:"863979fd70e0b430fa19554cc22118fc"})
	}
});

