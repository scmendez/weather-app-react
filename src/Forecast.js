import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.data.latitude === forecast.lat) {
    return (
      <div className="Forecast row">
        <ForecastPreview data={forecast.daily[1]} />
        <ForecastPreview data={forecast.daily[2]} />
        <ForecastPreview data={forecast.daily[3]} />
        <ForecastPreview data={forecast.daily[4]} />
        <ForecastPreview data={forecast.daily[5]} />
      </div>
    );
  } else {
    const apiKey = "2f036bba5972d2593243a4f078d73ef2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.latitude}&lon=${props.data.longitude}&exclude=currently,minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(forecastResponse);

    return null;
  }
}
