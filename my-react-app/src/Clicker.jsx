/** @format */

import React from "react";

function Clicker({ buttonText, message }) {
  function handleButton() {
    alert(message);
  }
  return (
    <div>
      <button onClick={handleButton}>{buttonText}</button>
    </div>
  );
}

export default Clicker;
