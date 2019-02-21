 import React, { Component } from 'react';
 import Location from './Location'
 import WeatherData from './WeatherData'
 import './styles.css';
 import {
    SUN,WINDY
} from './.././.././constants/weathers';

const location = "Bogota,col";
const api_key = "2ee07664ed5af1f7d6d9fc8e5497895d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather =`${url_base_weather}?q=${location}&appid=${api_key}`

 const data={
     temperature: 45,
     weatherState: SUN,
     humidity: 10,
     wind: '50 m/s'
 }

 const data2={
    temperature: 45,
    weatherState: WINDY,
    humidity: 50,
    wind: '10 m/s'
}

 class WeatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city:"GONORREA!",
            data: data
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        this.setState({
            city: "UY JUEPUTA!",
            data:data2
        })
    }
     render(){
         const {city , data } = this.state
         return (
        <div className="weatherLocationCont">
             <Location city={city}></Location>
             <WeatherData data={data}></WeatherData>
             <button onClick={this.handleUpdateClick}>Actualizar! <span role="img" aria-label="doggie">🐶</span></button>
        </div>
         )
     }
 };

 export default WeatherLocation;