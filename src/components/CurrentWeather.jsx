import React from "react";
import "./CurrentWeather.scss";

const CurrentWeather = ({
  time,
  temperature,
  weathercode,
  windspeed,
  winddirection,
}) => {
  let getWeather = (weathercode) => {
    if (weathercode === 0) {
      return "Ясно";
    }
    if (weathercode >= 1 && weathercode <= 3) {
      return "Пасмурно";
    }
    if (weathercode >= 45 && weathercode <= 48) {
      return "Туман";
    }
    if (weathercode >= 51 && weathercode <= 55) {
      return "Морось";
    }
    if (weathercode >= 56 && weathercode <= 57) {
      return "Изморозь";
    }
    if (weathercode >= 61 && weathercode <= 65) {
      return "Дождь";
    }
    if (weathercode >= 66 && weathercode <= 67) {
      return "Леденой дождь";
    }
    if (weathercode >= 71 && weathercode <= 75) {
      return "Снегопад";
    }
    if (weathercode === 77) {
      return "Снежные зерна";
    }
    if (weathercode >= 80 && weathercode <= 82) {
      return "Ливень";
    }
    if (weathercode >= 85 && weathercode <= 86) {
      return "Снег с дождем";
    }
    if (weathercode === 95) {
      return "Гроза";
    }
    if (weathercode >= 96 && weathercode <= 99) {
      return "Гроза с градом";
    }
    return "Error";
  };

  let weather = getWeather(weathercode);

  return (
    <div className="weather__container">
      <p>Время: {time}</p>
      <p>Температура: {temperature} C&#176;</p>
      <p>Погода: {weather}</p>
      <p>Скорость ветра: {windspeed} м/с</p>
      <p>Направление ветра: {winddirection}</p>
    </div>
  );
};

export default CurrentWeather;
