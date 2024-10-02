/** @format */

import React, { useState } from "react";
import Dice from "./Dice";
import { getRolls } from "./utils";
import Button from "./Button";

function LuckyN({ title = "Rolling a Dice", numDice, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);

  const roll = () => {
    setDice(getRolls(numDice));
  };
  return (
    <div>
      <main>
        <h1>
          {title} {isWinner && "You win!"}
        </h1>
        <Dice dice={dice} />
      </main>
      {/* <button onClick={roll}>Re-Roll Dice</button> */}
      <Button
        rollFunc={roll}
        lable='Re-Roll Dice'
      />
    </div>
  );
}

export default LuckyN;
