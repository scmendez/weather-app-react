import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [celTemp, setCelTemp] = useState(null);

  function showTemp(response) {
    setCelTemp(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2f036bba5972d2593243a4f078d73ef2`;
  axios.get(url).then(showTemp);

  return (
    <h1>
      The temperature in {props.city} is {Math.round(celTemp)}°C
    </h1>
  );
}
