import { useEffect, useState } from "react";

function ContadorAuto() {
  const [count, setCount] = useState(0);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;

    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Contador detenido");
    };
  }, [activo]);

  return (
    <div>
      <h2>Conteo: {count}</h2>
      <button onClick={() => setActivo(false)}>Pausar</button>
    </div>
  );
}

export default ContadorAuto;
