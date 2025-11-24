import React, { useEffect, useState } from "react";

export default function Bombero({ user, onLogout }) {
  const [alertas, setAlertas] = useState([]);
  const [respuesta, setRespuesta] = useState({});

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("alertas")) || [];
    setAlertas(guardadas);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const actualizadas = JSON.parse(localStorage.getItem("alertas")) || [];
      setAlertas(actualizadas);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const manejarRespuesta = (id, tipo) => {
    const nuevasAlertas = alertas.map((a) => {
      if (a.id === id) {
        if (!respuesta[id]) {
          if (tipo === "voy") a.confirmados += 1;
          else a.rechazados += 1;
          localStorage.setItem("alertas", JSON.stringify(nuevasAlertas));
        }
      }
      return a;
    });

    setAlertas(nuevasAlertas);
    setRespuesta({ ...respuesta, [id]: tipo });
    localStorage.setItem("alertas", JSON.stringify(nuevasAlertas));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.titulo}> Bombero: {user.nombre}</h2>
        <button onClick={onLogout} style={styles.logoutBtn}>
          Cerrar sesión
        </button>
      </header>

      {alertas.length === 0 ? (
        <p style={styles.noAlerta}>No hay alertas activas.</p>
      ) : (
        alertas.map((alerta) => (
          <div
            key={alerta.id}
            style={{
              ...styles.alertCard,
              borderLeft: `8px solid ${alerta.color}`,
            }}
          >
            <div style={styles.alertInfo}>
              <h3 style={styles.alertTipo}>{alerta.tipo}</h3>
              <p style={styles.alertDireccion}> {alerta.direccion}</p>
              <p style={styles.alertHora}>🕒 {alerta.hora}</p>
            </div>

            {!respuesta[alerta.id] ? (
              <div style={styles.botones}>
                <button
                  onClick={() => manejarRespuesta(alerta.id, "voy")}
                  style={styles.btnVoy}
                >
                   VOY
                </button>
                <button
                  onClick={() => manejarRespuesta(alerta.id, "noVoy")}
                  style={styles.btnNoVoy}
                >
                   NO VOY
                </button>
              </div>
            ) : (
              <p style={styles.confirmado}>
                {respuesta[alerta.id] === "voy"
                  ? " Confirmado: Vas a la emergencia."
                  : " Has indicado que no asistirás."}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    color: "#1d3557",
    fontWeight: "700",
  },
  logoutBtn: {
    padding: "8px 16px",
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: "600",
    cursor: "pointer",
  },
  noAlerta: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
    marginTop: 100,
  },
  alertCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: 15,
  },
  alertInfo: {
    marginBottom: 10,
  },
  alertTipo: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  alertDireccion: {
    fontSize: 16,
    color: "#333",
  },
  alertHora: {
    fontSize: 14,
    color: "#666",
  },
  botones: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
  },
  btnVoy: {
    flex: 1,
    marginRight: 8,
    padding: "14px 0",
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: "700",
    fontSize: 16,
    cursor: "pointer",
  },
  btnNoVoy: {
    flex: 1,
    padding: "14px 0",
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: "700",
    fontSize: 16,
    cursor: "pointer",
  },
  confirmado: {
    textAlign: "center",
    fontWeight: "600",
    color: "#1d3557",
    fontSize: 16,
    marginTop: 8,
  },
};
