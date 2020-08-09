import React from "react";
import "./App.css";
import Search from "./Search";
import SearchedCity from "./SearchedCity";
import TodaysDate from "./TodaysDate";
import TodaysWeatherDescription from "./TodaysWeatherDescription";
import TodaysHighLow from "./TodaysHighLow";
import CurrentTemperature from "./CurrentTemperature";
import TempUnits from "./TempUnits";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="SearchSection">
          <Search />
        </div>
        <SearchedCity />
        <div className="row">
          <div className="col-9 CurrentInfo">
            <TodaysDate />
            <TodaysWeatherDescription />
            <TodaysHighLow />
            <CurrentTemperature />
            <TempUnits />
          </div>
          <div className="col-3 WeatherDetails">
            <Wind />
            <Humidity />
            <Sunrise />
            <Sunset />
          </div>
        </div>

        <div className="container">
          <div className="row Forecast">
            <div className="col">
              <Forecast
                day="Tue"
                date="21/7"
                weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
                high="36°"
                low="28°"
              />
            </div>
            <div className="col">
              <Forecast
                day="Wed"
                date="22/7"
                weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
                high="36°"
                low="24°"
              />
            </div>
            <div className="col">
              <Forecast
                day="Thu"
                date="23/7"
                weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
                high="32°"
                low="23°"
              />
            </div>
            <div className="col">
              <Forecast
                day="Fri"
                date="24/7"
                weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
                high="34°"
                low="24°"
              />
            </div>
            <div className="col">
              <Forecast
                day="Sat"
                date="25/7"
                weatherIcon={"http://openweathermap.org/img/wn/01d@2x.png"}
                high="35°"
                low="24°"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="GitHubFooter">
        <p>
          <a
            href="https://github.com/scmendez/weather-app-react"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Sandra Mendez.
        </p>
      </div>
    </div>
  );
}
