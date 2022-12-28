import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}
function App() {
  const [ tasks, setTasks ] = useState<Task[]>([])

  function addTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: task,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => {
      return task.id != taskId
    })
    setTasks(newTasks);
  }

  function taskCheckById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks)
  }
  return (
    
    <div >
      < Header onAddTask={addTask} />
      < Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onCompleted={taskCheckById}
      />
    </div>
  )
}

export default App
