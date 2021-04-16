import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'mom Appointment',
    day: 'today',
    reminder: true,
    },
    {
      id: 2,
      text: 'dad Appointment',
      day: 'todady',
      reminder: true,
    },
    {
      id: 3,
      text: 'school Appointment',
      day: 'friday',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header title={1} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
