import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast/",
  withCredentials: true,
  timeout: 1000,
});

export const weatherAPI = {
  getWeather(latitude, longitude) {
    return instance
      .get(
        `latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,windspeed_10m&current_weather=true&timezone=Europe%2FMoscow`
      )
      .then((response) => response.data)
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
