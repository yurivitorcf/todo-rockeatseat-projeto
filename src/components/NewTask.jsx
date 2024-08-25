import { useState } from "react"
import styles from "./NewTask.module.css"
const NewTask = ({handleAddTask}) => {
    const [focused, setFocused] = useState(false);
    const [description, setDescription] = useState("");

    const handleFocusChange = (focused) => {
      setFocused(focused);
    };
  
    const handleInputChange = (event) => {
      setDescription(event.target.value)
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const newTask = {
        id: Date.now(),
        description: description
      }

      handleAddTask(newTask)

      setDescription("")
    }
      
    return (
      <div className={styles.inputDiv}>
          <input
            type="text"
            value={description}
            onChange={handleInputChange}
            className={styles.newTaskBox}
            placeholder={focused ? "Describe your task " : "Add a new task"}
            onFocus={() => handleFocusChange(true)}
            onBlur={() => handleFocusChange(false)}
          />
          <button onClick={handleSubmit} className={styles.button}>
            Create
            <ion-icon name="add-circle-outline" size="small" ></ion-icon>
          </button>
      </div>
    )
}

export default NewTask
