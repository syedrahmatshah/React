/** @format */

import React, { useState } from "react";

function startGameBoard() {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000);
}
function Dumbo() {
  const [board, setBoard] = useState(startGameBoard());

  return (
    <div>
      <button
        onClick={() => {
          setBoard("hello");
        }}>
        Click Me To Change The Game
      </button>
    </div>
  );
}

export default Dumbo;
