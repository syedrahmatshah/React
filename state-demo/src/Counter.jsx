/** @format */

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }
  function addThree() {
    setCount(count + 3);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}

export default Counter;
