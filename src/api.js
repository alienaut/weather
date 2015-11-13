'use strict';
var _ = require('lodash');

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=04fb6db0234c3a8d3f786949287d466f'

var kelvinToCelsius = (kelvin) => {
	return Math.round(kelvin - 273.15) + " ˚C";
}

var kelvinToFahreneit = (kelvin) => {
	return Math.round((kelvin - 273.15) * 1.8 + 32) + " ˚F";
};

module.exports = (latitude, longitude) => {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

	return fetch(url).then((res) => {
		return res.json();
	}).then((json) => {
		return {
			city: json.name,
			tempature: kelvinToCelsius(json.main.temp),
			description: _.capitalize(json.weather[0].description)
		};
	});
};
