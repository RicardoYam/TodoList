import React from 'react'
import Todo from './Todo'

function Todolist({todoList ,toggleTodo, deleteTodo}) {
  return (
    todoList.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></Todo>
    })
  )
}

export default Todolist