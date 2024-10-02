/** @format */

import React, { useState, useEffect } from "react";

function UseCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(function myEffect() {
    console.log("My Effect Was Called!");
  });
  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>{name}</p>
      <input
        onChange={handleChange}
        type='text'
      />
    </div>
  );
}

export default UseCounter;
