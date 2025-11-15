import { useEffect, useState, useRef } from "react";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (activo) {
      clearInterval(intervaloRef.current); 
      intervaloRef.current = setInterval(() => {
        setSegundos(s => s + 0.5);
      }, 500);
    } else {
      clearInterval(intervaloRef.current);
    }

    return () => {
      clearInterval(intervaloRef.current);
      console.log("Cronómetro desmontado");
    };
  }, [activo]);

  const iniciar = () => {
    setSegundos(0);
    setActivo(true);
  };

  const pausarReanudar = () => {
    setActivo(prev => !prev);
  };

  return (
    <div>
      <p>Contador: {Math.floor(segundos)}</p>

      <button onClick={iniciar}>Iniciar</button>

      <button onClick={pausarReanudar}>
        {activo ? "Pausar" : "Reanudar"}
      </button>
    </div>
  );
}
