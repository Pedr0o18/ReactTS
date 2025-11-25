import React, { useState } from "react"


type Task = {
    id: number
    title: string
    done: boolean
}

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Estudar", done: false }
    ])

    const [task, setTask] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }

    const addTask = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newTask: Task = {id: tasks.length + 1, title: task, done: false }
        setTasks([...tasks, newTask])
        console.log(tasks)
        setTask("")
    }

    const removeTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

  return (
    <div className="flex flex-col justify-center items-center text-3xl bg-gray-700 text-white p-4 gap-2" >
        <h1>Tarefas Tipadas</h1>
        <div>
            <input type="text" placeholder="tarefa" onChange={handleChange} value={task} className="border-2 p-2" />
            <button onClick={addTask} className="button" >Salvar</button>
        </div>
            <ul>
        {
            tasks.map((task) => (
                <li key={task.id} ><strong>Titulo:</strong> {task.id} {task.title} <strong>Estado:</strong> {task.done ? "Feita" : "Não Finalizada" } <button onClick={() => removeTask(task.id)} className="button" >Remover</button></li>
            ))
        }
        </ul>
    </div>
  )


}

export default Tasks