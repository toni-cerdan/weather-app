import React, { Component } from 'react';
import './CityWeatherBox.css';

export default class CityWeatherBox extends Component {
	state = {
		cityName: '',
		temp: '',
		weather: {},
		dataFetched: false
	}

	// TODO setState values from API
	componentDidMount() {
		fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Villajoyosa&lat=0&lon=0&units=metric", {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "06c5f9e25cmsh77ed7fed6fec4a7p171501jsn08db28b3e69b",
				"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({
					cityName: data.name,
					temp: data.main.temp,
					weather: data.weather[0].description,
					dataFetched: true
				})
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<div className="CityWeatherBox">
				{ this.state.dataFetched ? `El tiempo en ${this.state.cityName} es ${this.state.weather.description.toLowerCase()}` : 'Cargando datos...'}
			</div>
		);
	}
}