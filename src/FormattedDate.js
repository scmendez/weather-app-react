import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.data.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.data.getMonth()];

  let date = props.data.getDate();

  let year = props.data.getFullYear();

  return (
    <div>
      {day}, {month} {date}, {year}
    </div>
  );
}
