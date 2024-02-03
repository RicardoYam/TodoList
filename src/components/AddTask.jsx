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
        <div className='add-taskbar'>
            <input className='add-input' type='text' ref={taskInput}></input>
            <button className='add-btn' onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default AddTask