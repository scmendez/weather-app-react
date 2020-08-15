import React from "react";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form id="search-city">
            <input
              type="search"
              placeholder="Search a city"
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
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
      <CurrentInfo />
      <div className="row ForecastRow">
        <Forecast
          day="Tue"
          date="21/7"
          weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
          high="36°"
          low="28°"
        />
        <Forecast
          day="Tue"
          date="21/7"
          weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
          high="36°"
          low="28°"
        />
        <Forecast
          day="Tue"
          date="21/7"
          weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
          high="36°"
          low="28°"
        />
        <Forecast
          day="Tue"
          date="21/7"
          weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
          high="36°"
          low="28°"
        />
        <Forecast
          day="Tue"
          date="21/7"
          weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
          high="36°"
          low="28°"
        />
      </div>
    </div>
  );
}
