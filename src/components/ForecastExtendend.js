import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
import './styles.css';

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