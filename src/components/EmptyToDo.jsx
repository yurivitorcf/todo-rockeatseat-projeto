import styles from './EmptyToDo.module.css'
import icon from '../assets/folder.svg'

const EmptyToDo = () => {
  return (
    <section className={styles.container}>
       <img src={icon} alt="Folder icon" />
       <p><strong>You don't have any tasks created yet</strong></p>
       <p>Make tasks and organize your items to do</p>
    </section>
  )
}

export default EmptyToDo
