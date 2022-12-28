import { TbClipboardText } from "react-icons/tb";
import { Task } from "../App";
import { TaskInfo } from "./TaskInfo";
import styles from "./Tasks.module.css";
interface tasksProps {
  tasks: Task[];
  onDelete: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}
export function Tasks({ tasks, onDelete, onCompleted }: tasksProps) {
  const taskLength = tasks.length;
  const taskCompleted = tasks.filter((task) => {
    return task.isCompleted
  }).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskLength}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span> {taskCompleted} de {taskLength}</span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          return (
            < TaskInfo key={task.id} task={task} 
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
          )
        })}

        {tasks.length <= 0 && (
          <section className={styles.empyt}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
