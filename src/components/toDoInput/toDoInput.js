import React, { useState } from "react";
import Button from "../button/button";
import { v4 as uuidv4 } from "uuid";

const ENTER_KEY_CODE = 13;
const ToDoInput = function ({ addTask }) {
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    addTask({ id: uuidv4(), description: value, done: false });
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      handleAddTask();
    }
  };
  return (
    <div className="input-wrapper">
      <input
        className="todoinput"
        type="text"
        placeholder="Add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button isActive={Boolean(value)} onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default ToDoInput;
