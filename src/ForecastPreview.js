import React from "react";
import "./ForecastPreview.css";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import ForecastDate from "./ForecastDate";

export default function ForecastPreview(props) {
  return (
    <div className="ForecastPreview col">
      <div className="day">
        <ForecastDay data={new Date(props.data.dt * 1000)} />
      </div>
      <div className="date">
        <ForecastDate data={new Date(props.data.dt * 1000)} />
      </div>
      <div className="WeatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="high">{Math.round(props.data.temp.max)}°</div>
      <div className="low">{Math.round(props.data.temp.min)}°</div>
    </div>
  );
}
