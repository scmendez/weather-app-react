import React from "react";
import "./TodaysWeatherDescription.css";

export default function TodaysWeatherDescription() {
  return (
    <div className="TodaysWeatherDescription">
      <div className="TodaysWeatherIcon">
        <i class="fas fa-sun" />
      </div>
      <div className="TodaysWeatherWord">
        <p>Clear sky</p>
      </div>
    </div>
  );
}
