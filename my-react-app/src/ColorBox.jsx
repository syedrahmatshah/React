/** @format */

import React, { useState } from "react";
import "./ColorBox.css";

const colorChoice = (arr) => {
  const indx = Math.floor(Math.random() * arr.length);
  return arr[indx];
};

function ColorBox({ colors }) {
  const [color, setColor] = useState(colorChoice(colors));
  function changeColor(params) {
    const randomColor = colorChoice(colors);
    setColor(randomColor);
  }

  return (
    <div
      className='ColorBox'
      style={{ backgroundColor: color }}
      onClick={changeColor}></div>
  );
}

export default ColorBox;
