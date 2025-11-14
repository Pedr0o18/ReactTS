import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState<number>(0)

  return (
    <div className="flex flex-col justify-center items-center gap-2" >
        <h1>Contador: {count} </h1>
        <button onClick={() => setCount(count + 1)} className="button" >INCREMENTAR</button>
        <button onClick={() => setCount(count - 1)} className="button" >DECREMENTAR</button>
    </div>
  )

}

export default Count