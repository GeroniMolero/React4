import { useEffect, useState, useRef } from "react";

export default function Cronometro(){
    const[segundos,setSegundos]=useState(0);
    const[activo,setActivo]=useState(false);
    const intervaloRef = useRef(null);

    useEffect(()=>{
        if(activo){
            intervaloRef.current = setInterval(()=>{
                setSegundos((prev) => prev +1)
            },1000);
        }else{
            clearInterval(intervalo);
        }
        return() =>{
            clearInterval(intervalo);
            console.log("Cronometro desactivado")
        }
    },[activo]);

    return(
        <div>
            <p>Contador: {segundos}</p>
            <button onClick={() => setActivo(true)}>Iniciar</button>
            <button onClick={() => setActivo(false)}>Detener</button>
        </div>
    )
}