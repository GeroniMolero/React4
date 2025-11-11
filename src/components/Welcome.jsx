import { useEffect } from "react"
import { useState } from "react";

export default function Welcome(){
    const [mensaje, setMensaje] = useState("¡Bienvenido!");
    
    useEffect(()=>{
        console.log("Componente Welcome montado")
        const timer = setTimeout(()=>{
            setMensaje("Hola, usuario")
        },1000);

        return() => clearTimeout(timer);
    },[]);

    return(
        <div>
            <p>{mensaje}</p>
        </div>
    )
}