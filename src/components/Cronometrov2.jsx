import { useEffect, useRef, useState } from "react";
import "../styles/Cronometrov2.css";

export default function Cronometro() {
  const [tiempo, setTiempo] = useState(0); // tiempo en ms
  const [activo, setActivo] = useState(false);
  const inicioRef = useRef(null);

  useEffect(() => {
    let frameId;

    const actualizar = (timestamp) => {
      if (!inicioRef.current) {
        inicioRef.current = timestamp - tiempo; 
      }
      setTiempo(timestamp - inicioRef.current);
      frameId = requestAnimationFrame(actualizar);
    };

    if (activo) {
      frameId = requestAnimationFrame(actualizar);
    } else {
      cancelAnimationFrame(frameId);
      inicioRef.current = null;
    }

    return () => cancelAnimationFrame(frameId);
  }, [activo, tiempo]);

  const formatearTiempo = (ms) => {
    const totalSeg = Math.floor(ms / 1000);
    const min = String(Math.floor(totalSeg / 60)).padStart(2, "0");
    const seg = String(totalSeg % 60).padStart(2, "0");
    const cent = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

    return `${min}:${seg}:${cent}`;
  };

  const reiniciar = () => {
    setTiempo(0);
    inicioRef.current = null;
    setActivo(false);
  };

  return (
    <div className="cronometro-container">
      <div className="cronometro-display">
        {formatearTiempo(tiempo)}
      </div>

      <div className="cronometro-botones">
        <button 
          className="btn iniciar" 
          onClick={() => setActivo((prev) => !prev)}
        >
          {activo ? "Pausar" : "Iniciar"}
        </button>

        <button 
          className="btn reiniciar" 
          onClick={reiniciar}
          disabled={tiempo === 0}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
