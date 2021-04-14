import React, { Component } from 'react';

export class CityWeatherBox extends Component {
    state = {
        weather: []
    }

    componentDidMount() {
        fetch('https://www.metaweather.com/api/location/search/?query=madrid')
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            });
    }

    render() {
        return <div>Aquí va CityWeatherBox</div>;
    }
}