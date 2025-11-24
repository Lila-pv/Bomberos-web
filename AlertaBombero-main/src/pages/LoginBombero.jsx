import React, { useState } from "react";

export default function LoginBombero({ onLogin }) {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = () => {
    if (nombre.trim() === "" || clave.trim() === "") {
      alert("Complete todos los campos");
      return;
    }

    if (clave === "4321") {
      onLogin(nombre);
    } else {
      alert("Clave incorrecta");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.title}>Ingreso del Bombero</h1>
          <p style={styles.subtitle}>
            Cuartel de Echenagucía, Gerli y Piñeyro
          </p>

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleLogin} style={styles.button}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
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
    backgroundColor: "rgba(0, 0, 0, 0.55)",
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
    width: 360,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: "700",
    color: "#1d3557",
  },
  subtitle: {
    fontSize: 15,
    color: "#111",
    marginBottom: 25,
    opacity: 0.9,
  },
  input: {
    padding: 12,
    marginBottom: 15,
    width: "100%",
    borderRadius: 8,
    border: "1px solid #1d3557",
    fontSize: 16,
    backgroundColor: "#f8f9fa",
    color: "#1d3557",
  },
  button: {
    padding: 14,
    width: "100%",
    background: "linear-gradient(90deg, #1d3557, #457b9d)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 17,
    fontWeight: "600",
  },
};
