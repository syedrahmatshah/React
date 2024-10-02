/** @format */

import React, { useState } from "react";

function ScoreKeeper({ numPlayers, target }) {
  const [score, setScore] = useState(new Array(numPlayers).fill(0));
  const increment = (indx) => {
    setScore((prevScore) => {
      return prevScore.map((score, i) => {
        if (i === indx) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScore(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {score.map((score, indx) => {
          return (
            <li key={indx}>
              player{indx + 1}:{score}
              <button
                onClick={() => {
                  increment(indx);
                }}>
                +1
              </button>
              {score >= target && "Winner"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default ScoreKeeper;
