import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [taskText, setTaskText] = useState('Text')

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{taskText}</h1>
      <input type='text' value={taskText}/>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
    </div>
  );
}

export default App;
