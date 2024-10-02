/** @format */

import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function TodoForm() {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <ListItem>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        onChange={handleChange}
        value={text}
      />
    </ListItem>
  );
}
