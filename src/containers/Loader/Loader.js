import React from "react";
import "./Loader.css";
const Loader = (props) => {
  return (
    <div className="loaderContainer">
    <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
    </div>
  );
};

export default Loader;
