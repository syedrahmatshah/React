/** @format */

import React, { useState } from "react";

const Form = ({ onAdditems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItems = {
      id: Math.random(),
      description,
      quantity,
      packed: false,
    };

    onAdditems(newItems);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type='text'
        value={description}
        placeholder='item'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default Form;
