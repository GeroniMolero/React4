import { useEffect, useState, useRef } from "react";

export default function PanelUsuario({ onCerrar }) {
  const [usuario, setUsuario] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const timeoutRef = useRef(null);

  useEffect(() => {
    console.log("Panel montado... cargando datos");

    timeoutRef.current = setTimeout(() => {
      setUsuario({
        nombre: "María López",
        edad: 28,
      });
    }, 1500);

    return () => {
      clearTimeout(timeoutRef.current);
      console.log("Panel desmontado");
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!usuario) {
    return <p>Cargando...</p>;
  }

  return (
    <div 
      style={{
        padding: "20px",
        border: "2px solid #888",
        borderRadius: "10px",
        marginTop: "20px",
        width: "280px",
        background: theme === "light" ? "#fafafa" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Panel del Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>

      <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>
        Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
      </button>

      <br /><br />

      <button onClick={onCerrar} style={{ background: "red", color: "white" }}>
        Cerrar panel
      </button>
    </div>
  );
}
