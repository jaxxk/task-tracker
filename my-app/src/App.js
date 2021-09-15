import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState( [
    {
        id: 1,
        text: "appointment",
        date: "02-28-2022",
        reminder:true,
    },
    {
        id: 2,
        text: "doc appointment",
        date: "06-28-2022",
        reminder:false,
    },
  ])

  //add tasks 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (
      task.id !== id
    )))
  }

  //toggle remainder
  const toggleRemainder = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? {...task, reminder:!task.reminder} : task
    )))
  }

  return (
    <div className='container'>
      <Header title='Daily Tasks' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : "No tasks"}
      {/* can pass in props */}
    </div>
  )
}

export default App



      