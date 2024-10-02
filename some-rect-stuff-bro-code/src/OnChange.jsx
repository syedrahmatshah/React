/** @format */

// OnChange = event handler used primarily with form elements
//            for-example: <input>,<textarea>,<select>,<radio></radio>
//            Trigger a function every time the value of the input changes

import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      {/* Inputsfor changing name */}
      <input
        value={name}
        onChange={handleNameChange}></input>
      <p>Name:{name}</p>

      {/* Inputsfor changing quantity in number */}
      <input
        value={quantity}
        onChange={handleQuantityChange}
        type='number'></input>
      <p>Quantity:{quantity}</p>

      {/* Textarea */}
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder='Enter delivery instructions'></textarea>
      <p>Comment:{comment}</p>

      {/* Select */}
      <select
        value={payment}
        onChange={handlePaymentChange}>
        <option value=''>Select an option</option>
        <option value='Visa'>Visa</option>
        <option value='MasterCard'>Master Card</option>
        <option value='GiftCard'>GiftCard</option>
      </select>
      <p>Payment:{payment}</p>

      {/* Radio input */}
      <label>
        <input
          type='radio'
          value='Pick Up'
          name=''
          id=''
          checked={shipping === "Pick UP"}
          onChange={handleShippingChange}
        />
        Pick UP
      </label>
      <br />

      <label>
        <input
          type='radio'
          value='Delivery'
          name=''
          id=''
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping:{shipping}</p>
    </div>
  );
}

export default OnChange;
