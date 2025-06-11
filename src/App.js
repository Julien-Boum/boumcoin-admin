import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setAuthenticated(true)} />
  );
}

export default App;
