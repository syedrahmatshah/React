/** @format */

// UpdaterFunction = A function passed as an argument to setState() usually
//                   ex setYear(year => year + 1)
//                   Allows for safe update based on the previous state
//                   Used with multiple state updates and asynchronous function

import React, { useState } from "react";

function UpdaterFunc() {
  const [count, setCount] = useState();
  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className='counter-container'>
      <p className='count-display'>{count}</p>
      <button
        className='counter-button'
        onClick={decrement}>
        Decrement
      </button>
      <button
        className='counter-button'
        onClick={reset}>
        Reset
      </button>
      <button
        className='counter-button'
        onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default UpdaterFunc;
