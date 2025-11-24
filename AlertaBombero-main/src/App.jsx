import React, { useState } from "react";
import Login from "./pages/Login";
import LoginBombero from "./pages/LoginBombero";
import Dashboard from "./pages/Dashboard";
import Bombero from "./components/Bombero";

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (usuario) => {
    setUser(usuario);
  };

  const handleLogout = () => {
    setUser(null);
    setTipoUsuario(null);
  };

  if (!tipoUsuario && !user) {
    return (
      <div style={styles.container}>
        <div style={styles.overlay}>
          <div style={styles.card}>
            <h1 style={styles.title}> Sistema de Alertas</h1>
            <p style={styles.subtitle}>
              Cuartel de Bomberos Voluntarios de Echenagucía, Gerli y Piñeyro
            </p>
            <button
              onClick={() => setTipoUsuario("cuartelero")}
              style={styles.buttonRed}
            >
              Ingresar como Cuartelero
            </button>
            <button
              onClick={() => setTipoUsuario("bombero")}
              style={styles.buttonBlue}
            >
              Ingresar como Bombero
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (tipoUsuario === "cuartelero" && !user) {
    return <Login onLogin={(cuartel) => handleLogin({ tipo: "cuartelero", cuartel })} />;
  }

  if (tipoUsuario === "bombero" && !user) {
    return <LoginBombero onLogin={(nombre) => handleLogin({ tipo: "bombero", nombre })} />;
  }

  if (tipoUsuario === "cuartelero" && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (tipoUsuario === "bombero" && user) {
    return <Bombero user={user} onLogout={handleLogout} />;
  }

  return null;
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('/ImagenBomberos.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "rgba(255, 255, 255, 0.6)",
    padding: "45px 40px",
    borderRadius: 16,
    width: 380,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 28,
    fontWeight: "700",
    color: "#1d3557",
  },
  subtitle: {
    fontSize: 16,
    color: "#111",
    marginBottom: 30,
    opacity: 0.9,
  },
  buttonRed: {
    padding: 14,
    width: "100%",
    background: "linear-gradient(90deg, #e63946, #d00000)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  buttonBlue: {
    padding: 14,
    width: "100%",
    background: "linear-gradient(90deg, #1d3557, #457b9d)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 17,
    fontWeight: "600",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
};
