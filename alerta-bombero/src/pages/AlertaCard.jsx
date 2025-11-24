import React, { useEffect, useState } from "react";

export default function AlertaCard({ alerta, modo, onCancelar }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        ...styles.card,
        borderLeft: `6px solid ${alerta.color}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s ease",
      }}
    >
      <div style={styles.info}>
        <h4 style={styles.tipo}>{alerta.tipo}</h4>
        <p style={styles.direccion}>Avellaneda, {alerta.direccion}</p>
        <p style={styles.hora}>🕒 {alerta.hora}</p>
      </div>

      <div style={styles.stats}>
        <p style={{ color: "#2a9d8f", fontWeight: "600" }}>
           {alerta.confirmados} asisten
        </p>
        <p style={{ color: "#e63946", fontWeight: "600" }}>
           {alerta.rechazados} no van
        </p>
        {modo === "cuartelero" && (
          <button onClick={onCancelar} style={styles.cancelBtn}>
            Cancelar alerta
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  tipo: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  direccion: {
    fontSize: 16,
    color: "#333",
  },
  hora: {
    fontSize: 14,
    color: "#555",
  },
  stats: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 5,
  },
  cancelBtn: {
    backgroundColor: "#6c757d",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: 6,
  },
};
