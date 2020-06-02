 import React, { Component } from 'react';
 import CircularProgress from '@material-ui/core/CircularProgress';
 import { PropTypes } from 'prop-types';
 import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
 import transformWeather from './../../services/transformWeather';
 import Location from './Location'
 import WeatherData from './WeatherData'
 import getUrlPhotoByCity from './../../services/getUrlPhotoByCity';
 import './styles.css';

 class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;
        this.image = null;
        this.state={
            city,
            data: null,
            image: this.getPhotoByCity(city)
        };
    }

    componentDidMount() {
         //Shortcut cdm
         this.handleUpdateClick();
         // this.image = getPhotoByCity(this.state.city);
    }

    componentDidUpdate(prevProps, prevState) {
        //Shortcut cdup
    }

    getPhotoByCity = (city) =>{
        const photoUrl = getUrlPhotoByCity(city);
        fetch(photoUrl).then(response =>{
            return response.json();
          }).then(jsonResponse =>{
              const selectedImage = jsonResponse.results[Math.floor(Math.random() * jsonResponse.results.length)].urls.small;
                this.setState({
                    image: selectedImage
                }) 
          });
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
         const {city , data, image } = this.state
         return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick} style={{
            backgroundImage: `url(${image})`}}>
             <Location city={city}></Location>
             { data && image ?  <WeatherData data={data}></WeatherData> : <CircularProgress size={60}/>}
        </div>
         )
     }
 };
 WeatherLocation.propTypes = {
     city: PropTypes.string.isRequired,
     onWeatherLocationClick: PropTypes.func,
 }
 export default WeatherLocation;