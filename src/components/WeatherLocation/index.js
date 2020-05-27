 import React, { Component } from 'react';
 import CircularProgress from '@material-ui/core/CircularProgress';
 import { PropTypes } from 'prop-types';
 import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
 import transformWeather from './../../services/transformWeather';
 import Location from './Location'
 import WeatherData from './WeatherData'
 import './styles.css';

 class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;
        this.state={
            city,
            data: null
        };
    }

    componentDidMount() {
         //Shortcut cmd
         this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        //Shortcut cdup
    }

    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    
     render(){
         const { onWeatherLocationClick } = this.props
         const {city , data } = this.state
         return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick} style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`}}>
             <Location city={city}></Location>
             { data ?  <WeatherData data={data}></WeatherData> : <CircularProgress size={60}/>}
        </div>
         )
     }
 };
 WeatherLocation.propTypes = {
     city: PropTypes.string.isRequired,
     onWeatherLocationClick: PropTypes.func,
 }
 export default WeatherLocation;