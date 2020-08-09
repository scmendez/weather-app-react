import React from "react";
import "./TodaysHighLow.css";

export default function TodaysHighLow() {
  return (
    <div className="TodaysHighLow">
      <div className="TodaysHighLowTitle">High: </div>
      <div className="TodaysHigh"> &nbsp; 36°</div>
      <div className="TodaysHighLowTitle"> &nbsp; Low: </div>
      <div className="TodaysLow"> &nbsp; 33°</div>
    </div>
  );
}
