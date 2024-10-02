/** @format */

import React, { useState } from "react";
import ValidateShoppingListForm from "./ValidateShoppingListForm";
import { v4 as uuid } from "uuid";

function ShoppingList() {
  const [items, setItem] = useState([
    { id: uuid(), product: "Apple", quantity: 2 },
    { id: uuid(), product: "Eggs", quantity: 8 },
  ]);

  const additem = (item) => {
    if (!item.product) {
      return item;
    }
    setItem((currData) => {
      return [...currData, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidateShoppingListForm additem={additem} />
    </div>
  );
}

export default ShoppingList;
