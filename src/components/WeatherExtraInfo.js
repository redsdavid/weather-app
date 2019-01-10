import React from "react";

const WeatherExtraInfo = ({humidity , wind}) =>(
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} Viento`}</span>
    </div>
    
);

export default WeatherExtraInfo;