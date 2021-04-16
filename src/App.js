import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
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

  //delete task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header title={1} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
