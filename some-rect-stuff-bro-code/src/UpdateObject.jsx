/** @format */

import React, { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    Year: 2024,
    Make: "Ford",
    Model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, Year: event.target.value }));
  };

  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, Make: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, Model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.Year} {car.Make} {car.Model}
      </p>

      {/* Input for change year */}
      <input
        type='number'
        value={car.Year}
        onChange={handleYearChange}
      />
      <br />

      {/* Input for change Make */}
      <input
        type='text'
        value={car.Make}
        onChange={handleMakeChange}
      />
      <br />

      {/* Input for change Model */}
      <input
        type='text'
        value={car.Model}
        onChange={handleModelChange}
      />
    </div>
  );
}

export default UpdateObject;
