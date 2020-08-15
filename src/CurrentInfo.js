import React from "react";
import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-9">
          <div className="TodaysDate">
            <h2>Mon, July 20, 2020</h2>
          </div>
          <div className="TodaysWeatherDescription">
            <div className="TodaysWeatherIcon">
              <i className="fas fa-sun" />
            </div>
            <div className="TodaysWeatherWord">
              <p>{props.data.description}</p>
            </div>
          </div>
          <div className="TodaysHighLow">
            <div className="TodaysHighLowTitle">High: </div>
            <div className="TodaysHigh">
              {" "}
              &nbsp; {Math.round(props.data.high)}°
            </div>
            <div className="TodaysHighLowTitle"> &nbsp; Low: </div>
            <div className="TodaysLow">
              {" "}
              &nbsp; {Math.round(props.data.low)}°
            </div>
          </div>
          <div className="CurrentTemperature">
            {Math.round(props.data.currentTemp)}
          </div>
          <div className="TempUnits">
            <button className="Active">°C</button> |<button> °F</button>
          </div>
        </div>

        <div className="col-3">
          <div className="Wind">
            <div className="WeatherDetailTitle">Wind</div>
            <div className="WeatherDetailInfo">{props.data.wind} km/hr</div>
          </div>
          <div className="Humidity">
            <div className="WeatherDetailTitle">Humidity</div>
            <div className="WeatherDetailInfo">{props.data.humidity}%</div>
          </div>
          <div className="Sunrise">
            <div className="WeatherDetailTitle">Sunrise</div>
            <div className="WeatherDetailInfo">07:01</div>
          </div>
          <div className="Sunset">
            <div className="WeatherDetailTitle">Sunset</div>
            <div className="WeatherDetailInfo">21:47</div>
          </div>
        </div>
      </div>
    </div>
  );
}
