import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
import './styles.css';

/* const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'cloud',
    wind: 'normal'
} */

export const api_key = "2ee07664ed5af1f7d6d9fc8e5497895d";
export const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        // Se ejecuta cada que hay una actualizacion de las propiedades.
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city =>{
        const url_forecast = `${url}?q=${city}&appid=${api_key}`
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        )
    }
    

    renderForecastItemDays(forecastData){
        
        return forecastData.map( forecast  => (
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data = {forecast.data}>
            </ForecastItem>
        ));
    }

    renderProgress = ()  =>{
        return "Cargando pronóstico extendido";
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
            { forecastData ? 
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForecastExtended;