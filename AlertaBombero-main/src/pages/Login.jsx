import React, { useState } from 'react';
import './Login.css'; 

export default function Login({ onLogin }) {
  const [cuartel, setCuartel] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (cuartel.trim() === '') {
      alert('Por favor, ingrese el nombre del cuartel');
      return;
    }

    if (
      cuartel.trim().toLowerCase() ===
        'echenagucia, gerli y piñeyro' &&
      password === '12345'
    ) {
      onLogin(cuartel);
    } else {
      alert('Nombre del cuartel o contraseña incorrectos');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.title}>Sistema de Alertas</h1>
          <p style={styles.subtitle}>Ingreso del Cuartelero</p>

          <input
            type="text"
            placeholder="Cuartel"
            value={cuartel}
            onChange={(e) => setCuartel(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleLogin} style={styles.button}>
            Ingresar
          </button>

          <p style={styles.footerText}>
            © {new Date().getFullYear()} Bomberos Voluntarios de Echenagucia,
            Gerli y Piñeyro
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundImage: "url('/ImagenBomberos.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 1s ease-in',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.55)',
    padding: '45px 40px',
    borderRadius: 16,
    width: 380,
    boxShadow: '0px 10px 25px rgba(0,0,0,0.4)',
    textAlign: 'center',
    animation: 'slideUp 0.6s ease-out',
  },
  title: {
    marginBottom: 8,
    fontSize: 26,
    fontWeight: '700',
    color: '#1d3557',
  },
  subtitle: {
    fontSize: 16,
    color: '#111111ff',
    marginBottom: 30,
    opacity: 0.9,
  },
  input: {
    padding: 12,
    marginBottom: 15,
    width: '100%',
    borderRadius: 8,
    border: '1px solid #1d3557', 
    fontSize: 16,
    outline: 'none',
    backgroundColor: '#f8f9fa', 
    color: '#1d3557', 
    transition: '0.3s',
  },
  button: {
    padding: 14,
    width: '100%',
    background: 'linear-gradient(90deg, #e63946, #d00000)',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  footerText: {
    fontSize: 12,
    marginTop: 25,
    color: '#1d1d1dff',
    opacity: 0.7,
  },
};
