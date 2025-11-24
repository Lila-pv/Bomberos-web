import React, { useState } from "react";

export default function NuevaAlerta({ onCrearAlerta }) {
  const [direccion, setDireccion] = useState("");

  const tiposEmergencia = [
    { tipo: "Incendio", color: "#e63946" },
    { tipo: "Accidente Grave", color: "#f3722c" },
    { tipo: "Fuga de Gas", color: "#f9c74f" },
    { tipo: "Asistencia Médica", color: "#577590" },
  ];

  const crearAlerta = (tipo, color) => {
    if (!direccion.trim()) {
      alert("Ingrese la dirección de la emergencia");
      return;
    }

    const alerta = {
      id: Date.now(),
      tipo,
      color,
      direccion,
      hora: new Date().toLocaleTimeString(),
      confirmados: 0,
      rechazados: 0,
    };

    const guardadas = JSON.parse(localStorage.getItem("alertas")) || [];
    const nuevas = [alerta, ...guardadas];
    localStorage.setItem("alertas", JSON.stringify(nuevas));
    onCrearAlerta(alerta);
    setDireccion("");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Emitir nueva alerta</h3>

      <div style={styles.tipoContainer}>
        {tiposEmergencia.map((e, i) => (
          <button
            key={i}
            style={{ ...styles.tipoBtn, backgroundColor: e.color }}
            onClick={() => crearAlerta(e.tipo, e.color)}
          >
            {e.tipo}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Dirección de la emergencia"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: 15,
    color: "#1d3557",
    fontSize: 20,
    fontWeight: "600",
  },
  tipoContainer: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 15,
  },
  tipoBtn: {
    flex: 1,
    padding: "14px 10px",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: 16,
    boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.15s",
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
  },
};
