import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city...."
              className="form-control"
            />
          </div>

          <div className="col-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      <h1>Calgary</h1>
      <ul>
        <li>Thursday 23:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 20% </li>
            <li>Humidity : 50%</li>
            <li>Wind : 45 Km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
