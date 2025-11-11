import { useEffect, useState } from "react";

export default function NombreFormulario(){
    const [nombre,setNombre] = useState("");
    const [mensaje,setMensaje] = useState("");

    useEffect(()=>{
        setMensaje(`Hola, ${nombre}`)
    },[nombre]);

    useEffect(()=>{
        console.log("Componente NombreFormulario montado")
    },[])

    return(
        <div>
            <input
             type="text"
             value={nombre}
             onChange={(e)=> setNombre(e.target.value)}
             placeholder="Escribe tu nombre..."
              />
            <p>{mensaje}</p>
        </div>
    )
}