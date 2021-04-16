import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask ] = useState (false) 

  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Icecream Appointment',
    day: 'today',
    reminder: true,
    },
    {
      id: 2,
      text: 'Bussiness Appointment',
      day: 'today',
      reminder: true,
    },
    {
      id: 3,
      text: 'school Appointment',
      day: 'friday',
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) 
  }


  //delete task. Set up back end data to delete the task once its done.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Here!'}
    </div>
  );
}

export default App;
