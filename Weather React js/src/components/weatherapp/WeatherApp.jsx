import React from 'react'
import './WeatherApp.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import clouds_icon from '../assets/clouds.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'



const WeatherApp = () => {
  return (
    <div className="container">
        <div className="top_bar">
            <input type="text" className='city_input' placeholder='search'/>
            <div className="search_icon">
                <img src={search_icon}/>
            </div>
        </div>
        <div className="weather_image">
            <img src={clouds_icon}/>
        </div>
        <div className="weather_temp">24°C</div>
        <div className="weather_location">London</div>
        <div className="data_container">
            
        </div>
    </div>
  )
}

export default WeatherApp