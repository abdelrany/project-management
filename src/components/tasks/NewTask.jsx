import React, { useState } from "react";
import { Button, Input } from "../ui";

export function NewTask({ onAdd }) {
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
      <Button variant="ghost" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
