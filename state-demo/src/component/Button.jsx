/** @format */

import React from "react";
import "./Button.css";

function Button({ rollFunc, lable = "Re-Roll" }) {
  return (
    <div>
      <button
        className='button'
        onClick={rollFunc}
        lable={lable}>
        Click Me
      </button>
    </div>
  );
}

export default Button;
