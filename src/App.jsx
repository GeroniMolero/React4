import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CicloVida from './components/CicloVida'
import Welcome from './components/Welcome'
import NombreFormulario from './components/NombreFormulario'
import Cronometro from './components/Cronometro'

function App() {
  const [count, setCount] = useState(0)
  const [mostrar,setMostrar] = useState(true)

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"} componente
      </button>
      {mostrar && <CicloVida />}
      <Welcome/>
      <NombreFormulario/>
      <Cronometro />
    </div>
  )
}

export default App
