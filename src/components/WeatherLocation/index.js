 import React, { Component } from 'react';
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
     render(){
         return (
        <div className="weatherLocationCont">
             <Location city={'TaBogo!'}></Location>
             <WeatherData data={data}></WeatherData>
        </div>
         )
     }
 };

 export default WeatherLocation;