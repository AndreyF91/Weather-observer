import React, { useEffect } from "react";
import "./GeocodeForm.scss";
// import Geocode from "react-geocode";

const Geocodeform = ({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  setPressure,
  setWindspeed,
  isPressure,
  isWindspeed,
}) => {
  // Need GoogleAPI key to get coordinates
  useEffect(() => {
    //   Geocode.fromAddress("Hrodno").then(
    //     (response) => {
    //       const { lat, lng } = response.results[0].geometry.location;
    //       console.log(lat, lng);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
  }, []);

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <div className="form">
      <div className="form__inner">
        <input
          className="form__input"
          type="text"
          placeholder="Latitude"
          onChange={(e) => setLatitude(e.target.value)}
          value={latitude}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Longitude"
          onChange={(e) => setLongitude(e.target.value)}
          value={longitude}
        />
        <button type="button" onClick={getCoordinates}>
          Определить текущее положение
        </button>
        <button disabled type="button">
          Найти
        </button>
      </div>
      <div className="form__inner">
        <p>Показать: </p>
        <label className="form__checkbox">
          <input
            type="checkbox"
            name="windspeed"
            id="1"
            onChange={() => setPressure(!isPressure)}
          />
          Облачность
        </label>
        <label className="form__checkbox">
          <input
            type="checkbox"
            name="pressure"
            id="2"
            onChange={() => setWindspeed(!isWindspeed)}
          />
          Скорость ветра
        </label>
      </div>
    </div>
  );
};

export default Geocodeform;
