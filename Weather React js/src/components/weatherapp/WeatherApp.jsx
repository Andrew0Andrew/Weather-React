import React from 'react'
import './WeatherApp.css'
import { useState } from 'react'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import clouds_icon from '../assets/clouds.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {

    const [city,setCity]=useState('')
    const [result,setResult]=useState(null)

    const submit = () => {
        const apiKey='59dd08c581624ef744a15f2c04b9e48e'
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`
        fetch(url)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data)
                setResult(data)
            })
    }

  return (
    <div className="container">
        <div className="top_bar">
            <input type="text" className='city_input' placeholder='search' value={city} onChange={e => setCity(e.target.value)}/>
            <div className="search_icon" onClick={submit}>
                <img src={search_icon} className='search_icon_pic'/>
            </div>
        </div>
        {result && (
        <>
        <div className="weather_image">
            <img src={clouds_icon}/>
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