/** @format */
import { v4 as uuid } from "uuid";
import { useState } from "react";

function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊" }]);
  function addEmojis() {
    setEmojis((oldEmojis) => {
      return [...oldEmojis, { id: uuid(), emoji: "😉" }];
    });
  }

  function deleteEmojis(id) {
    setEmojis((prevemojis) => {
      return prevemojis.filter((e) => e.id !== id);
    });
  }

  function addAHeart() {
    setEmojis((prevemojis) => {
      return prevemojis.map((e) => {
        return { ...e, emoji: "❤" };
      });
    });
  }
  return (
    <div>
      {emojis.map((e) => {
        return (
          <span
            onClick={() => deleteEmojis(e.id)}
            style={{ fontSize: "3rem" }}
            key={e.id}>
            {e.emoji}
          </span>
        );
      })}
      <button onClick={addEmojis}>Click To Add</button>
      <button onClick={addAHeart}>Click To Add Heart</button>
    </div>
  );
}
export default EmojiClicker;
