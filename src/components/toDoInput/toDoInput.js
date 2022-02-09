import React, { useState } from "react";
import Button from "../button/button";
import { v4 as uuidv4 } from 'uuid';

const ToDoInput = function ({ addTask }) {
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    addTask({ id: uuidv4(), description: value, done: false });
    setValue('');
  }
  return (
    <div className="input-wrapper">
      <input
        className="todoinput"
        type="text"
        placeholder="Add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};

export default ToDoInput;
