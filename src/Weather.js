import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import "./Weather.css";
import DotLoader from "react-spinners/DotLoader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getCityWeatherData(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      currentTemp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function searchCity() {
    const apiKey = "2f036bba5972d2593243a4f078d73ef2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getCityWeatherData);
  }

  function formSubmitted(event) {
    event.preventDefault();
    searchCity();
  }

  function cityValue(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={formSubmitted}>
              <input
                type="search"
                placeholder="Search a city"
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
                onChange={cityValue}
              />
            </form>
          </div>
          <div className="col-3">
            <i className="fas fa-search searchButton" id="search-city-button" />
            <i
              className="fas fa-map-marker-alt currentLocationButton"
              id="current-location-button"
            />
          </div>
        </div>
        <CurrentInfo data={weatherData} />
        <div className="row ForecastRow">
          <Forecast
            day="Tue"
            date="21/7"
            weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
            high="36°"
            low="28°"
          />
          <Forecast
            day="Wed"
            date="22/7"
            weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
            high="36°"
            low="28°"
          />
          <Forecast
            day="Thu"
            date="23/7"
            weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
            high="36°"
            low="28°"
          />
          <Forecast
            day="Fri"
            date="24/7"
            weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
            high="36°"
            low="28°"
          />
          <Forecast
            day="Sat"
            date="25/7"
            weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
            high="36°"
            low="28°"
          />
        </div>
      </div>
    );
  } else {
    searchCity();
    return (
      <DotLoader
        size={100}
        color={"#2E728D"}
        css="display: block; margin: 0 auto;"
      />
    );
  }
}
