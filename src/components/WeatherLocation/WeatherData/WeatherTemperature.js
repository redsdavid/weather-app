import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    FOG,
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './.././.././../constants/weathers';
import './styles.css';

const icons = {
    [FOG]: "day-fog",
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
}
const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if (icon)
return <WeatherIcons name={icon} className="wicon" size={{sizeIcon}}/>;
    else 
        return <WeatherIcons name={SUN} className="wicon" size={{sizeIcon}}/>;
}

const WeatherTemperature = ({temperature , weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)    
        }
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;