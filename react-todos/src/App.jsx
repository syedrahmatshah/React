/** @format */

import { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <CssBaseline /> */}
      <TodoList />
    </div>
  );
}

export default App;
