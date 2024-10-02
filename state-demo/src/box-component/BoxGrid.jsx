/** @format */

import React, { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css";

function BoxGrid() {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false, false]);
  };

  const toggler = (indx) => {
    setBoxes((oldBox) => {
      return oldBox.map((value, i) => {
        if (i === indx) {
          return !value;
        } else {
          return value;
        }
        {
        }
      });
    });
  };

  return (
    <div className='BoxGrid'>
      {boxes.map((b, indx) => {
        return (
          <Box
            isActive={b}
            toggler={() => toggler(indx)}
          />
        );
      })}
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default BoxGrid;
