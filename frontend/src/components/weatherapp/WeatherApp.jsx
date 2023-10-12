import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import clouds_icon from '../assets/clouds.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const weatherIcons = {
    Clouds: clouds_icon,
    Drizzle: drizzle_icon,
    Clear: clear_icon,
    Rain: rain_icon,
    Snow: snow_icon,
};

import { config } from '../../config';

const WeatherApp = () => {
    const [city,setCity]=useState('|');
    const [result,setResult]=useState(null);
    const [error, setError]=useState(null);
    const [isFocus, setIsFocus]=useState(false);

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSubmit();
        };
    };

    const handleSubmit = () => {
        if(city === '') {
            setError('Enter your city');
            return;
        };
        setError(null);
        fetch(`${config.url}&appid=${config.apiKey}&q=${city}`)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data)
                if (data.cod === 200) {
                    setResult(data)
                } else {
                    setError('City is not valid.')
                    return;
                };
            })
            .catch(error=>{
                console.error(error);
            });
    };

  return (
    <div className="container">
        { error && (
            <div className='container_error'>
                {error}
            </div>
        )}
        <div className="top_bar">
            <input onKeyDown={handleKeyPress} type="text" className='city_input' onFocus={()=>{setIsFocus(true); setCity('')}} onBlur={()=>{setIsFocus(false); setCity('|')}} value={city} onChange={e => setCity(e.target.value)}/>
            <div className={isFocus?"search_icon":'search_icon_blur'} onClick={handleSubmit}>
                <img src={search_icon} className='search_icon_pic'/>
            </div>
        </div>
        {result && (
        <>
            <div className="weather_image">
                <img src={weatherIcons[result.weather[0].main]}/>
            </div>
            <div className="weather_temp">{Math.round(result.main.temp)}°C</div>
            <div className="weather_location">{result.name}</div>
            <div className="data_container">
                <div className="element">
                    <img src={humidity_icon} className='icon'/>
                    <div className="data">
                        <div className="humidity_percent">{result.main.humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} className='icon'/>
                    <div className="data">
                        <div className="wind_speed">{Math.round(result.wind.speed)} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </>
        )}
    </div>
    )
}

export default WeatherApp