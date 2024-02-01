import React, { useRef } from 'react'

function AddTask({ addTask }) {
    const taskInput = useRef()

    function handleClick() {
        const taskValue = taskInput.current.value.trim();
        if (taskValue !== '') {
            addTask(taskValue);
            taskInput.current.value = '';
        }
    }

    return (
        <>
            <input type='text' ref={taskInput}></input>
            <button className='btn' onClick={handleClick}>Add Task</button>
        </>
    )
}

export default AddTask