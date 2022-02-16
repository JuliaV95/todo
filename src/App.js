import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header/header";
import ToDoInput from "./components/toDoInput/toDoInput";
import "./scss/main.scss";
import { ItemList } from "./components/list/list";

const ListWrapper = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  margin-bottom: 20px;
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(tasks => {
      setTasks(tasks);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  const deleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handlerAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const handleCheck = (id) => {
    setTasks(tasks.map((item) => (item.id === id) ? {
      ...item,
      completed : !item.completed,
    } : item));
  };

  return (
    <div className="form">
      <Header tasksAmount={tasks.length} tasksRemain={tasks.filter(item => !item.completed).length}/>
      <ListWrapper>
        <ItemList tasks={tasks} deleteItem={deleteItem} handleCheck={handleCheck}/>
      </ListWrapper>
      <ToDoInput addTask={handlerAddTask} />
    </div>
  );
}

export default App;
