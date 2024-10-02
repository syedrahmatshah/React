/** @format */

import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  function changeNum() {
    setNum(num + 1);
  }
  return (
    <div>
      <p>The count is :{num}</p>
      <button onClick={changeNum}>Increment!</button>
    </div>
  );
}

export default Counter;
