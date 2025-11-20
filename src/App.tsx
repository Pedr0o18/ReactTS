import './App.css'

/* Hooks */
import { useState } from 'react'

/* Componentes */
import Header from './components/Header'
import Card from './components/Card'
import Count from './components/Count'
import InputBox from './components/InputBox'

function App() {

  const [url, setUrl] = useState<string>("https://s2-techtudo.glbimg.com/wpiBO5hfpim5bhwTY93QpR6elnk=/0x0:620x349/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/F/L/6h8cWjR4W6IYgywE3SyA/2013-08-08-minecraft-pc-10-curiosidades.jpg")

  const [load, setLoad] = useState<boolean>(true)

  const handleRender = () => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }

  handleRender()

  return (
    <main className="App">
      <Header title={"Pedro Antonio"} />
      <p className='m-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolore nobis? Quas, eaque. Itaque earum dolor vel excepturi possimus numquam eius accusantium! Provident deserunt, fugiat ipsum perferendis cupiditate omnis quisquam.</p>
      <Card title={"Minecraft"} description={"Um jogo daora"} url={url} />
      <Count />
      <InputBox />
      <div className='text-5xl text-center m-4' >
        {load ? <h3>Carregando...</h3> : <h3>Carregado</h3> }
      </div>
    </main>
  )
}

export default App
