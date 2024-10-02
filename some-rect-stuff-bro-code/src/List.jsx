/** @format */

import React from "react";

function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "pineApple", calories: 37 },
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //This is Alphabatical
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabatical
  //fruits.sort((a, b) => a.calories - b.calories); //This numeric order
  //fruits.sort((a, b) => a.calories - b.calories)  //Reverse numeric order

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  // const hightCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));
  return <ol>{listItems}</ol>;
}

export default List;
