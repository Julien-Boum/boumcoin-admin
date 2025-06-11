
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return authenticated ? <Dashboard /> : <Login onLogin={() => setAuthenticated(true)} />;
}
export default App;
