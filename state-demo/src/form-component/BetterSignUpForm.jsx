/** @format */

import React, { useState } from "react";

function BetterSignUpForm() {
  const [formData, SetFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    // const changeField = evt.target.name;
    // const newValue = evt.target.value;
    SetFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor='firstName'></label>
      <input
        type='text'
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}
        id='firstName'
        name='firstName'
      />
      <label htmlFor='lastName'></label>
      <input
        type='text'
        placeholder='Last Name'
        value={formData.lastName}
        onChange={handleChange}
        id='lastName'
        name='lastName'
      />
      <label htmlFor='password'></label>
      <input
        type='password'
        placeholder='password'
        value={formData.password}
        onChange={handleChange}
        id='password'
        name='password'
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default BetterSignUpForm;
