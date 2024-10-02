/** @format */

import React from "react";
import Die from "./Die";
import "./Dice.css";

function Dice({ dice, color = "slateblue" }) {
  return (
    <section className='dice'>
      {dice.map((v, i) => {
        return (
          <Die
            key={i}
            value={v}
            color={color}
          />
        );
      })}
    </section>
  );
}

export default Dice;
