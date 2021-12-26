import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Chart from "./components/Chart";
import CurrentWeather from "./components/CurrentWeather";
import Geocodeform from "./components/GeocodeForm";
import Header from "./components/Header";

function App() {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isPressure, setPressure] = useState(false);
  const [isWindspeed, setWindspeed] = useState(false);

  const [latitude, setLatitude] = useState(68.973311);
  const [longitude, setLongitude] = useState(33.085585);

  console.log(hourlyWeather);

  useEffect(() => {
    setFetching(true);
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,cloudcover,windspeed_10m&current_weather=true&timezone=Europe%2FMoscow&past_days=2`
      )
      .then(function (response) {
        // handle success

        let hourlyWeather = response.data.hourly.time.map(function (i, ind) {
          return {
            time: i,
            temperature: response.data.hourly.temperature_2m[ind],
            pressure: response.data.hourly.cloudcover[ind],
            windspeed: response.data.hourly.windspeed_10m[ind],
          };
        });
        setCurrentWeather(response.data.current_weather);
        setHourlyWeather(hourlyWeather);
        console.log(hourlyWeather);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function (response) {
        setFetching(false);
      });
  }, [latitude, longitude]);

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <main className="main">
          <CurrentWeather
            time={currentWeather.time}
            temperature={currentWeather.temperature}
            weathercode={currentWeather.weathercode}
            windspeed={currentWeather.windspeed}
            winddirection={currentWeather.winddirection}
          />
          <Geocodeform
            latitude={latitude}
            longitude={longitude}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setPressure={setPressure}
            setWindspeed={setWindspeed}
            isPressure={isPressure}
            isWindspeed={isWindspeed}
          />

          <Chart
            data={hourlyWeather}
            isFetching={isFetching}
            currentWeather={currentWeather.time}
            isPressure={isPressure}
            isWindspeed={isWindspeed}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
