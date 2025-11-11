import { useEffect, useState } from "react";

export default function CicloVida(){
    const [nombre,setNombre] = useState("Pepe");

    useEffect(()=>{
        console.log("Montado")
        return()=>{
        console.log("Desmontado")
        }
    },[]);


    useEffect(()=>{
        console.log(`Nombre actualizado a ${nombre}`)
    },[nombre])


    return(
        <div>
            <p>Tu nombre es: {nombre}</p>
            <input 
                type="text"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                placeholder="Escribe tu nombre..." />
        </div>
    )
}