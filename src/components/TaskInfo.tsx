import styles from "./TaskInfo.module.css";
import { TbTrash } from 'react-icons/tb'
import { Task } from "../App";
import { BsFillCheckCircleFill } from 'react-icons/bs'
interface taskProps {
    task: Task;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}
export function TaskInfo({task, onDelete, onCompleted}: taskProps) {
    
  return (
    <div className={styles.task}>
      <button className={styles.checkTask} onClick={() => onCompleted(task.id)}>
        {task.isCompleted? < BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted? styles.textCompleted: ""}>
        {task.title}
      </p>
      <button className={styles.deleteTask} onClick={() => onDelete(task.id)} >
        < TbTrash />
      </button>
    </div>
  );
}
