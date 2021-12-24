import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast/",
  timeout: 1000,
});

export const weatherAPI = {
  getWeather(latitude, longitude) {
    return instance
      .get(`latitude=${latitude}&longitude=${longitude}`)
      .then((response) => response.data);
  },
};
