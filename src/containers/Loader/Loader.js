import React from "react";
import "./Loader.css";
const Loader = (props) => {
  return (
    <div className="loaderContainer">
    <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
    </div>
    </div>
  );
};

export default Loader;
