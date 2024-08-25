import styles from "./Task.module.css"
const Task = ({task, deleteTask, boxChecked}) => {

  const handleChange = () => {
    boxChecked(task.id)
  }

  return (
    <div className={styles.taskContainer}>
      <input
        type="checkbox"
        name="task"
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={styles.description}>{task.description}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default Task
