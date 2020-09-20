import React, { useState } from "react";
import axios from "axios";

import ForecastList from "./ForecastList";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastList data={forecast.list[0]} />
        <ForecastList data={forecast.list[1]} />
        <ForecastList data={forecast.list[2]} />
        <ForecastList data={forecast.list[3]} />
        <ForecastList data={forecast.list[4]} />
        <ForecastList data={forecast.list[5]} />
        <ForecastList data={forecast.list[6]} />
      </div>
    );
  } else {
    let apiKey = "d431d2ed9ff419b2288a607b5abcf652";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
