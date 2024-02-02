import React, {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Todolist from './components/Todolist'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const TODOLIST_KEY = 'todoList'
  const [todoList, setTodoList] = useState(() => {
     // Use a function to initialize the state to ensure this code only runs once
     const storedTodoList = localStorage.getItem(TODOLIST_KEY);
     // Parse the stored list if it exists, otherwise default to an empty array
     return storedTodoList ? JSON.parse(storedTodoList) : [];
  })

  useEffect(() => {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList))
  }, [todoList])

  const addTask = (task) => {
    setTodoList([...todoList, {id: uuidv4(), name: task, completed: false}])
  }

  
  return (
    <>
      <h1>Todo List</h1>
      <AddTask addTask={addTask}></AddTask>
      <Todolist todoList={todoList}></Todolist>
    </>
  )
}

export default App