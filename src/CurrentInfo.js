import React from "react";
import "./CurrentInfo.css";
import CurrentDate from "./CurrentDate";
import FormattedSunriseSunset from "./FormattedSunriseSunset";
import WeatherIcon from "./WeatherIcon";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-9">
          <div className="TodaysDate">
            <h2>
              <CurrentDate data={props.data.date} />
            </h2>
          </div>
          <div className="TodaysWeatherDescription">
            <div className="TodaysWeatherIcon">
              <WeatherIcon code={props.data.icon} />
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
            <div className="WeatherDetailInfo">
              <FormattedSunriseSunset data={props.data.sunrise} />
            </div>
          </div>
          <div className="Sunset">
            <div className="WeatherDetailTitle">Sunset</div>
            <div className="WeatherDetailInfo">
              <FormattedSunriseSunset data={props.data.sunset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
