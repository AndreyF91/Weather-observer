import React from "react";
import "./Preloader.scss";
import loading from '../../img/loading.gif'

const Preloader = () => {
  return (
    <div className="preloader__container">
      <img className="preloader" src={loading} alt="Loading" />
    </div>
    
  );
};

export default Preloader;
