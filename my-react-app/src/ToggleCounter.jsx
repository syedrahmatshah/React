/** @format */

import React, { useState } from "react";
import "./Toggler.css";

function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(2);
  function changeIsHappy() {
    setIsHappy(!isHappy);
  }
  function changeCount() {
    setCount(count + 2);
  }
  return (
    <div>
      <p
        className='toggler'
        onClick={changeIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={changeCount}>Increment</button>
    </div>
  );
}

export default ToggleCounter;
