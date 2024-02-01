import React, {useState} from 'react'
import AddTask from './components/AddTask'
import Todolist from './components/Todolist'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([])

  const addTask = (task) => {
    setTodoList([...todoList, {id: uuidv4(), name: task, comleted: false}])
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