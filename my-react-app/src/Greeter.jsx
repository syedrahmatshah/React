/** @format */
// Props = Props are like argument that we can pass to our
//         Component .
//         We use props to make configurable Components
//         ex: <Greeter name="Bill" />
import React from "react";

export default function Greeter({ person, from }) {
  return (
    <>
      <h1>Hi there, {person}!!!</h1>
      <h2>from-{from}</h2>
    </>
  );
}
