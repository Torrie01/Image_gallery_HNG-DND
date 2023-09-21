import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (email === 'user@example.com' && password === '1Password') {
      try {
        navigate('/gallery');
      } catch (error) {
        console.error('Authentication error:', error);
      }
    } else {
      setErrorMessage('Invalid Email or Password');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Torrie's Couture</h1>
      <p>You can login to view our catalogue.</p>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="1Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
