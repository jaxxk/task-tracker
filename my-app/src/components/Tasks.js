import React from 'react'
// import {useState} from 'react'
import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle}) => {    
    return (
        //cannot do tasks.push because it is not immutable. make a new state and send it
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          ))}
        </>
    )
}

export default Tasks
