/** @format */

import React, { useState } from "react";

function ShoppingListForm({ additem }) {
  const [formData, SetFormData] = useState({
    product: "",
    quantity: 0,
  });

  const handleChange = (evt) => {
    SetFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    additem(formData);
    SetFormData({ product: "", quantity: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Product is:{formData.product} and Quantity is:{formData.quantity}
      </h1>
      <label htmlFor='product'></label>
      <input
        type='text'
        placeholder='Product Name'
        value={formData.product}
        onChange={handleChange}
        id='product'
        name='product'
      />
      <label htmlFor='quantity'></label>
      <input
        type='number'
        placeholder='Quantity Num'
        value={formData.quantity}
        onChange={handleChange}
        id='quantity'
        name='quantity'
      />
      <button>Add</button>
    </form>
  );
}

export default ShoppingListForm;
