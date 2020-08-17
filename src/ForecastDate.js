import React from "react";

export default function ForecastDate(props) {
  let date = props.data.getDate();

  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[props.data.getMonth()];

  return (
    <div>
      {date}/{month}
    </div>
  );
}
