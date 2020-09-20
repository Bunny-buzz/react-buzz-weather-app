import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer>
          Project by Nimi Dada and open-sourced on{" "}
          <a
            href="https://github.com/Bunny-buzz/react-buzz-weather-app"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
