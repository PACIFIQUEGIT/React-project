import React, { useState } from 'react';
import './Login.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here you would typically handle the login logic, like an API call
    // For now, let's simulate a successful login and redirect
    // If login is successful:
    navigate('/dashboard'); // Use navigate to redirect
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="containerl">
        <form id="form" onSubmit={handleSubmit}>
          <h2>Login in</h2>
          <div className="form-group">
            <label htmlFor="email">Email or Phone</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{error}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{error}</div>
            <div className="show-password">
              <input
                type="checkbox"
                id="show-password"
                onClick={togglePassword}
              />{' '}
              Show
            </div>
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit">Login in</button>
          <div className="footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
