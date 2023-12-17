import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implementa la lógica de inicio de sesión aquí
    console.log('Login:', { email, password });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Implementa la lógica de registro aquí
    console.log('Register:', { email, password, confirmPassword });
  };

  return (
    <div className="login-container">
      <div className="button-container">
        <button onClick={() => setIsLoginActive(false)} className={!isLoginActive ? 'active' : ''}>
          Regístrate
        </button>
        <button onClick={() => setIsLoginActive(true)} className={isLoginActive ? 'active' : ''}>
          Inicia sesión
        </button>
      </div>
      {!isLoginActive ? (
        <form onSubmit={handleRegister} className="form-register">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma Contraseña" required />
          <button type="submit">Regístrate</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="form-login">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
          <button type="submit">Inicia sesión</button>
        </form>
      )}
    </div>
  );
}

export default Login;
