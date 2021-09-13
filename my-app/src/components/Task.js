import React from 'react'
import {FaTimes} from 'react-icons/fa'
// import {useState} from 'react'

const Task = ({task,onDelete,onToggle}) => {    
    return (
        <div className= {`task ${task.reminder ? "reminder" : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{color:
                'red', cursor:'pointer'}} onClick={ () => onDelete(task.id)}/> 
                {/* //state gets passed down and "actions gets passed up */}
            </h3>

        </div>
    )
}

export default Task
