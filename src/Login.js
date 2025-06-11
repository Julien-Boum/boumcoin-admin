import React, { useState } from 'react';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin') {
      onLogin();
    } else {
      alert('Mot de passe incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '40px', textAlign: 'center' }}>
      <h2>🔐 Connexion Administrateur</h2>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          width: '60%',
          maxWidth: '300px',
        }}
      />
      <br />
      <button type="submit" style={{ padding: '10px 20px' }}>
        Se connecter
      </button>
    </form>
  );
}

export default Login;
