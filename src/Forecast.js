import React from "react";
import "./Forecast.css";

export default function Forecast({ day, date, weatherIcon, high, low }) {
  return (
    <div className="Forecast col">
      <div className="day">{day}</div>
      <div className="date">{date}</div>
      <div className="WeatherIcon">
        <img alt="sun" src={weatherIcon} />
      </div>
      <div className="high">{high}</div>
      <div className="low">{low}</div>
    </div>
  );
}
