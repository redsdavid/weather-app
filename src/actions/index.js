import transformForecast from './../services/transformForecast';

// React : ACTION CREATOR
export const SET_CITY ='SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const api_key = "2ee07664ed5af1f7d6d9fc8e5497895d";
export const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`
        
        // Activar en el estado un indicador de busqueda de datos.
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // Modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            }
        )
    }
};