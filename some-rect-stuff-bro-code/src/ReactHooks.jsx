/** @format */

// React Hook = React Hook is a special function that allows functional component
//              to use react features without writing
//              class component like(useState,useEffect,useContext,useCallback and more ...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to updates its value
//              in the virtual DOM .[name,setName]

import React, { useState } from "react";

function ReactHooks() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Zakir");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
}

export default ReactHooks;
