import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleBackClick = () => {
    navigate('/'); // Assuming '/' is your starting page route
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
        <img src="src/cookchumlogo.png" alt="Cookchum Logo" className="logo" />
      <div className="login-container">
        <h2>Sign In</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="show-password-icon"
              onClick={togglePasswordVisibility}
            >
             
            </button>
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password</a>
          </div>
          
          <button type="submit" className="login-button">Login</button>
          
          <p className="register-text">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
        <button onClick={handleBackClick} className="back-button">Back</button>
      </div>

    </div>
  );
};

export default Login;
