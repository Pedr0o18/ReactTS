type Task = {
    id: number
    title: string
    done: boolean
}

const Tasks = () => {

    const tasks: Task[] = [
        {id: 1, title: "Estudar", done: false}
    ]

  return (
    <div className="flex flex-col justify-center items-center text-3xl bg-gray-700 text-white p-4 gap-2" >
        <h1>Tarefas Tipadas</h1>
        <ul>
            {
                tasks.map((task) => (
                    <li key={task.id} ><strong>Titulo:</strong> {task.title} <strong>Estado:</strong> {task.done ? "Feita" : "Não Finalizada" }</li>
                ))
            }
        </ul>
    </div>
  )


}

export default Tasks