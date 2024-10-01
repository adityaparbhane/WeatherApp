import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function searchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d008d502f25cea56385bababa9a1e389";
  let getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      let weatherData = {
        city: city,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch (error) {
      console.error("Error: ", error);
      setError(true && "City not found");
    }
  };
  return (
    <div className=" m-10 flex-col items-center h-[200px] flex ">
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl mb-4">Search for the weather</h3>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="w-[300px] flex flex-col"
        />
        <br />
        <br />
        <Button variant="contained" className="items-center" type="submit">
          Search
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default searchBox;
