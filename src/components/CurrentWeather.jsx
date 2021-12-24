import React from "react";

const CurrentWeather = ({
  time,
  temperature,
  weathercode,
  windspeed,
  winddirection,
}) => {

  return (
    <div className="weather__container">
      <p>Время: {time}</p>
      <p>Температура: {temperature} C&#176;</p>
      <p>Погода: {weathercode}</p>
      <p>Скорость ветра: {windspeed}</p>
      <p>Направление ветра: {winddirection}</p>
    </div>
  );
};

export default CurrentWeather;
