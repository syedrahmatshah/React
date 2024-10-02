/** @format */
import React from "react";
import "./Box.css";

function Box({ isActive, toggler }) {
  return (
    <div
      onClick={toggler}
      className='Box'
      style={{ backgroundColor: isActive ? "black" : "red" }}></div>
  );
}

export default Box;
