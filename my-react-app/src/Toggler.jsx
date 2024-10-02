/** @format */

import React, { useState } from "react";
import "./Toggler.css";

function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  function changeIsHappy() {
    setIsHappy(!isHappy);
  }
  return (
    <div>
      <p
        className='toggler'
        onClick={changeIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
    </div>
  );
}

export default Toggler;
