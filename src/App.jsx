import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CicloVida from './components/CicloVida'
import Welcome from './components/Welcome'
import NombreFormulario from './components/NombreFormulario'
import Cronometro from './components/Cronometro'
import Cronometrov2 from './components/Cronometrov2'
import ContadorAuto from './components/ContadorAuto'
import PanelUsuario from './components/PanelUsuario'

function App() {
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
      <Cronometrov2 />
      <ContadorAuto/>
      <div>
        <button onClick={() => setMostrar((prev) => !prev)}>
          {mostrar ? "Ocultar panel" : "Mostrar panel"}
        </button> 
        {mostrar && <PanelUsuario onCerrar={() => setMostrar(false)} />}
      </div>
    </div>
  )
}

export default App
