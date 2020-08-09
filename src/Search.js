import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-9">
          <form id="search-city">
            <input
              type="search"
              placeholder="Search a city"
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </form>
        </div>
        <div className="col-3">
          <i className="fas fa-search search-button" id="search-city-button" />
          <i
            className="fas fa-map-marker-alt current-location-button"
            id="current-location-button"
          />
        </div>
      </div>
    </div>
  );
}
