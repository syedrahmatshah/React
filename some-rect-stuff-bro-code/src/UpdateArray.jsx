/** @format */

import React, { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleRemoveFood = () => {
    const newFood = document.getElementById(foodInput).value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  };

  return (
    <div>
      <h1>List of Food</h1>

      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input
        type='text'
        id='foodInput'
        placeholder='Enter Food Name'
      />
      <button onClick={handleAddFoods}>Add Food</button>
    </div>
  );
}

export default UpdateArray;
