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

    let apiKey = '59dd08c581624ef744a15f2c04b9e48e';

    const search = () => {
        const element = document.getElementsByClassName("city_input")
        if(element[0].value===''){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${element[0].value}` 
    }

  return (
    <div className="container">
        <div className="top_bar">
            <input type="text" className='city_input' placeholder='search'/>
            <div className="search_icon" onClick={()=>{search()}}>
                <img src={search_icon} className='search_icon_pic'/>
            </div>
        </div>
        <div className="weather_image">
            <img src={clouds_icon}/>
        </div>
        <div className="weather_temp">24°C</div>
        <div className="weather_location">London</div>

        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} className='icon'/>
                <div className="data">
                    <div className="humidity_percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} className='icon'/>
                <div className="data">
                    <div className="humidity_percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp