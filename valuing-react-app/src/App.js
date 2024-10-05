/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/LogIn'
          element={<LogIn />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
