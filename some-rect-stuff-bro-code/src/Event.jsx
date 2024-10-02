/** @format */

import React from "react";

function Event() {
  const handleClick4 = (e) => (e.target.textContent = "OUCH!");
  return <button onDoubleClick={(e) => handleClick4(e)}>Click Me!</button>;

  //   let count = 0;
  //   const handleClick3 = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} You Clicked Me ${count} times`);
  //     } else {
  //       console.log(`${name} Stop Clicking Me`);
  //     }
  //   };
  //   return <button onClick={() => handleClick3("Bro")}>Click Me!</button>;
  // ===================================================================================>

  //   const handleClick = () => console.log("Ouch!");
  //   const handleClick2 = (name) => console.log(`${name} stop clicking me`);
  //   return <button onClick={() => handleClick2("Bro")}>Click Me!</button>;
}

export default Event;
