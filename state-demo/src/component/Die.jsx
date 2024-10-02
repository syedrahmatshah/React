/** @format */

import React from "react";
import "./Die.css";

function Die({ value, color = "slateblue" }) {
  return (
    <div
      className='die'
      style={{ backgroundColor: color }}>
      {value}
    </div>
  );
}

export default Die;
