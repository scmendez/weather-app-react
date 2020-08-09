import React from "react";
import "./TempUnits.css";

export default function TempUnits() {
  return (
    <div className="TempUnits">
      <a href="#" className="Active">
        °C
      </a>{" "}
      |<a href="#"> °F</a>
    </div>
  );
}
