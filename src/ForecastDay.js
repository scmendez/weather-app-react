import React from "react";

export default function ForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.data.getDay()];

  return <div>{day}</div>;
}
