import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Import the Dashboard component
import ImportCSV from './ImportCSV';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [authenticated, setAuthenticated] = useState(false);

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = () => {
    // Perform validation against the provided credentials
    if (credentials.username === 'gouri' && credentials.password === 'gouri') {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <div>
      {!authenticated ? (
        <div>
          <input type="text" name="username" value={credentials.username} onChange={handleCredentialsChange} placeholder="Username" />
          <input type="password" name="password" value={credentials.password} onChange={handleCredentialsChange} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
}

export default Login;
