const location = "Bogota,col";
const api_key = "2ee07664ed5af1f7d6d9fc8e5497895d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather =`${url_base_weather}?q=${location}&appid=${api_key}&units=metric`