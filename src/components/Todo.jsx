import React from 'react'

function Todo({ todo }) {
    return (
        <>
            <div className='todo'>
                <input type='checkbox'></input>
                <div>{todo.name}</div>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </>
    )
}

export default Todo