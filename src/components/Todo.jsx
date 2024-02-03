import React from 'react'

function Todo({ todo, toggleTodo, deleteTodo }) {
    var created = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(todo.time)

    function handleChange() {
        toggleTodo(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    return (
        <>
            <div className='todo'>
                <input className='todo-checkbox' type='checkbox' checked={todo.completed} onChange={handleChange}></input>
                <div className='todo-text'>
                    <div className='todo-name'>{todo.name}</div>
                    <div className='todo-time'>{created}</div>
                </div>
                <button className='todo-btn' onClick={handleDelete}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </>
    )
}

export default Todo