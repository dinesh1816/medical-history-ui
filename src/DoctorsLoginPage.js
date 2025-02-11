import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorsLoginPage.css';

function DoctorsLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    const validEmail = 'doctor@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      // Redirect to the doctor's dashboard on successful login
      navigate('/doctor-dashboard');
    } else {
      // Show error message for invalid credentials
      setError('Invalid email or password');
    }
  };

  return (
    <div className="doctors-login-page">
      <div className="login-container">
        <h2>Doctor's Login</h2>
        {error && <div className="error-banner">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default DoctorsLoginPage;