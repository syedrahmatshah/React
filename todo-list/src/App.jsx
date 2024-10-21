/** @format */
import React, { useState } from "react";
import Logo from "./component/Logo";
import "./index.css";
import Form from "./component/Form";
import PackingList from "./component/PackingList";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
      />
    </div>
  );
};

export default App;
