import React, { useState } from "react";
import { Input } from "./ui";

function NewTask({ onAdd }) {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit() {
    if (text === "") return;
    setText("");
    onAdd(text);
  }
  return (
    <div className="flex gap-3">
      <Input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default NewTask;
