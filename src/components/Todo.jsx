import React from 'react'

function Todo({ todo, toggleTodo, deleteTodo }) {
    function handleChange() {
        toggleTodo(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    return (
        <>
            <div className='todo'>
                <input type='checkbox' checked={todo.completed} onChange={handleChange}></input>
                <div>{todo.name}</div>
                <button onClick={handleDelete}>Delete</button>
                <button>Edit</button>
            </div>
        </>
    )
}

export default Todo