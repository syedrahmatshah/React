/** @format */
import React from "react";

const PackingList = ({ items, onDeleteItems }) => {
  return (
    <ul>
      {items.map((item, id) => (
        <li key={item.id}>
          {item.quantity} {item.description}
          <button onClick={() => onDeleteItems(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default PackingList;
