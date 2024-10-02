/** @format */

import React, { useState } from "react";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updatefirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updatelastName = (evt) => {
    setLastName(evt.target.value);
  };
  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor='firstName'></label>
      <input
        type='text'
        placeholder='username'
        value={firstName}
        onChange={updatefirstName}
        id='firsName'
      />
      <label htmlFor='lastName'></label>
      <input
        type='text'
        placeholder='username'
        value={lastName}
        onChange={updatelastName}
        id='lastName'
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default SignUpForm;
