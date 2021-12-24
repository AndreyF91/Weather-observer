import React from "react";
import "./Preloader.scss";
import loading from '../../img/loading.gif'

const Preloader = () => {
  return (
    <img className="preloader" src={loading} alt="Loading" />
  );
};

export default Preloader;
