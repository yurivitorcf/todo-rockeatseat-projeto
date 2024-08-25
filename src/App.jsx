import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header"
import NewTask from "./components/NewTask"
import EmptyToDo from "./components/EmptyToDo"
import TaskStatus from "./components/TaskStatus"
import Task from "./components/Task"

import "./global.css"
function App() {

  const [tasks, setTasks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConcluded] = useState(0);


  const handleCompletedTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    const taskConcluded = updatedTasks.filter((task) => task.completed).length;
    setTaskConcluded(taskConcluded);
  };


  const handleAddTask = (newTask) => {
    if (!newTask.description === "" || newTask.description.trim() === "") {
      alert("Please, type a task");
      return;
    }

    const taskWithId = { ...newTask, id: uuidv4(), completed: false };
    setTasks([...tasks, taskWithId]);
    setIsEmpty(false)
    setTaskCreated(taskCreated + 1)
  }

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    setIsEmpty(updatedTasks.length === 0)
    setTaskCreated(taskCreated - 1)
    const remaningTasks = updatedTasks.filter((task) => task.completed).length
    setTaskConcluded(remaningTasks)
  }

  return (
    <>
      <Header />
      <NewTask handleAddTask={handleAddTask}/>  
      <TaskStatus createdTaskCounter={taskCreated} concludedTaskCounter={taskConcluded} text={taskCreated >= 1 ? " of " + taskCreated : ""}/>
      {isEmpty ? (<EmptyToDo />) : (
        <div>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              boxChecked={() => handleCompletedTask(task.id)}
              deleteTask={() => handleDeleteTask(task.id)}/>
          ))}
        </div>
      )}
      
    </>
  )
}

export default App
