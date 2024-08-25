import { useState } from "react"
import styles from './TaskStatus.module.css'

const TaskStatus = ({createdTaskCounter, concludedTaskCounter,text}) => {

  return (
    <section className={styles.container}>
      <div className={styles.status}>
        <p className={styles.created}>Created Tasks</p>
        <button>{createdTaskCounter}</button>
      </div>
      <div className={styles.status}>
        <p className={styles.concluded}>Concluded</p>
        <button>{concludedTaskCounter}{text}</button>
      </div>
    </section>
  )
}

export default TaskStatus