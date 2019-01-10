import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={'sun'}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind="10 m/s"></WeatherExtraInfo>
    </div>
    
);

export default WeatherData;