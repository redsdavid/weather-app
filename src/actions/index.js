// React : ACTION CREATOR

export const SET_CITY ='SET_CITY'
export const setCity = payload => ({type: SET_CITY, payload});

export const api_key = "2ee07664ed5af1f7d6d9fc8e5497895d";
export const url = "https://api.openweathermap.org/data/2.5/forecast";
export const fetchForecast = payload => {
    
    return dispatch => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`
        
        // Activar en el estado un indicador de busqueda de datos.
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // Modificar el estado con el resultado de la promise
            }
        )
    }
};