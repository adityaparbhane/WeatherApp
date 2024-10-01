import React from "react";
import SearchBox from "../components/SearchBox";
import InfoBox from "../components/InfoBox";
import { useState } from "react";

function weatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    temp: 28,
    temp_min: 25,
    temp_max: 30,
    humidity: 50,
    feelsLike: 30,
    weather: "Cloudy",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div className="flex flex-col items-center">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default weatherApp;
