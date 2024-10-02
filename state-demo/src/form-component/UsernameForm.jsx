/** @format */

import React, { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("Tumm");
  const updateUser = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={updateUser}
      />
      <button>Add</button>
    </div>
  );
}

export default UsernameForm;
