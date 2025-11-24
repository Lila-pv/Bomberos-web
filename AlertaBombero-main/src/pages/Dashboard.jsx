import React, { useState, useEffect } from "react";
import NuevaAlerta from "./NuevaAlerta";
import AlertaCard from "./AlertaCard";

export default function Dashboard({ user, onLogout }) {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("alertas")) || [];
    setAlertas(guardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("alertas", JSON.stringify(alertas));
  }, [alertas]);

  useEffect(() => {
    const interval = setInterval(() => {
      const actualizadas = JSON.parse(localStorage.getItem("alertas")) || [];
      setAlertas(actualizadas);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const agregarAlerta = (alerta) => {
    const nuevas = [alerta, ...alertas];
    setAlertas(nuevas);
  };

  const cancelarAlerta = (id) => {
    if (window.confirm("¿Seguro que desea cancelar esta emergencia?")) {
      const restantes = alertas.filter((a) => a.id !== id);
      setAlertas(restantes);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.welcome}> Cuartel: {user.cuartel}</h2>
        <button onClick={onLogout} style={styles.logoutBtn}>
          Cerrar Sesión
        </button>
      </header>

      <NuevaAlerta onCrearAlerta={agregarAlerta} />

      <h3 style={styles.alertTitle}>Alertas activas</h3>
      <div style={styles.alertContainer}>
        {alertas.length === 0 ? (
          <p style={{ color: "#555" }}>No hay alertas activas.</p>
        ) : (
          alertas.map((a) => (
            <AlertaCard
              key={a.id}
              alerta={a}
              modo="cuartelero"
              onCancelar={() => cancelarAlerta(a.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    color: "#1d3557",
    fontWeight: "700",
  },
  logoutBtn: {
    padding: "10px 20px",
    background: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.2s",
  },
  alertTitle: {
    marginTop: 20,
    fontSize: 20,
    color: "#333",
  },
  alertContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
};
