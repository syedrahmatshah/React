/** @format */

import React, { useState } from "react";

function ValidateShoppingListForm({ additem }) {
  const [formData, SetFormData] = useState({
    product: "",
    quantity: 0,
  });
  const [isValidate, setIsValidate] = useState(false);

  const validate = () => {
    if (formData.product.length == 0) {
      setIsValidate(false);
    } else {
      setIsValidate(true);
    }
  };
  const handleChange = (evt) => {
    if (evt.target.name === "product") {
      validate(evt.target.value);
    }
    SetFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidate) {
      additem(formData);
      SetFormData({ product: "", quantity: 0 });
    }
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
      {!isValidate && (
        <p style={{ color: "red" }}>Product is not set to be empty</p>
      )}
      <label htmlFor='quantity'></label>
      <input
        type='number'
        placeholder='Quantity Num'
        value={formData.quantity}
        onChange={handleChange}
        id='quantity'
        name='quantity'
      />
      <button disabled={!isValidate}>Add</button>
    </form>
  );
}

export default ValidateShoppingListForm;
