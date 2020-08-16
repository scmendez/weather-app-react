import React from "react";

export default function FormattedSunriseSunset(props) {
  let hour = props.data.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let min = props.data.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  return (
    <div>
      {hour}:{min}
    </div>
  );
}
