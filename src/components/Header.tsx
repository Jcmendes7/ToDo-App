import logoTodo from "../assets/Logo.svg";
import style from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FormEvent, ChangeEvent } from 'react'
import { useState } from "react"
interface onTaskProps {
  onAddTask: (tast: string) => void;
}
export function Header({onAddTask}: onTaskProps) {
  const [title, setTitle] = useState("")
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  return (
    <header className={style.header}>
      <img src={logoTodo} alt="" />
      <form className={style.newTaskForm} onSubmit={handleSubmit}>
        <input 
          placeholder="Adicione uma nova tarefa" 
          onChange={onChangeTask} 
          value={title} 
        />
        <button type="submit">
          Criar 
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
