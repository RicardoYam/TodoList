import React from 'react'
import Todo from './Todo'

function Todolist({todoList}) {
  return (
    todoList.map(todo => {
        return <Todo key={todo.id} todo={todo}></Todo>
    })
  )
}

export default Todolist