import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Wake up",
      day: "5th May 3:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Learn React",
      day: "6th May 10:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Check for jobs on linkedin",
      day: "6th May 3:00pm",
      reminder: false,
    },
  ]);
//add task
const addTask = (task)=>{
 const id = Math.floor(Math.random()*1000) + 1 
 const newTask = {id,...task}
 setTasks([...tasks,newTask])
}
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle remainder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task ))
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
