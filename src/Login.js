
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin') onLogin();
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: 40, textAlign: 'center' }}>
      <h2>Connexion admin</h2>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Entrer</button>
    </form>
  );
}
export default Login;
