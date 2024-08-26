import { Trash } from "@phosphor-icons/react"
import styles from "./Task.module.css"
const Task = ({task, deleteTask, boxChecked}) => {

  const handleChange = () => {
    boxChecked(task.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>    
       <input
        className={styles.checkbox}
        type="checkbox"
        name="task"
        checked={task.completed}
        onChange={handleChange}
      /> 
      <label className={styles.label}>{task.description}</label>    
      </div>
      <button onClick={deleteTask}>
        <Trash size={16} className={styles.trash}></Trash>
      </button>
    </div>
  )
}

export default Task