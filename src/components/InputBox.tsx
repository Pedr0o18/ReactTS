import React, { useState } from "react"

const InputBox = () => {

    const [text, setText] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

  return (
    <div className="flex justify-center items-center flex-col gap-2 bg-gray-300" >
        <h1>Input Tipado</h1>
        <div>
            {text}
        </div>
        <input type="text" placeholder="Digite aqui" onChange={handleChange} className="border-2" />
    </div>
  )
}

export default InputBox