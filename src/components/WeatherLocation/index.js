 import React, { Component } from 'react';
 import transformWeather from './../../services/transformWeather';
 import { api_weather } from './../../constants/api_url';
 import Location from './Location'
 import WeatherData from './WeatherData'
 import './styles.css';
 import {
    SUN
} from './.././.././constants/weathers';

 const data={
     temperature: 45,
     weatherState: SUN,
     humidity: 10,
     wind: '50 m/s'
 }

 class WeatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city:"TaBogo!",
            data: data
        };
        console.log("constructor");
    }

    componentDidMount() {
         //Shortcut cmd
         console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        //Shortcut cdup
        console.log("componentDidUpdate");
    }

    
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    
    


    
    

    handleUpdateClick = () => {
        
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            
            const newWeather = transformWeather(data);
            console.log(newWeather)
            debugger;
            this.setState({
                data: newWeather
            });
        });

    
    }
     render(){
         const {city , data , jsonWeatherState } = this.state
         console.log("render");
         return (
        <div className="weatherLocationCont">
             <Location city={city}></Location>
             <WeatherData data={data}></WeatherData>
             <button onClick={this.handleUpdateClick}>Actualizar! <span role="img" aria-label="doggie">🐶</span></button>
        <div>
             {jsonWeatherState}
        </div>
        </div>
         )
     }
 };

 export default WeatherLocation;