import React, { useState } from 'react';
import './Login.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({}); // Use an object to store error messages
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({}); // Reset the error messages on submit

    let newErrors = {};
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Provide a valid email';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 10) {
      newErrors.password = 'Password must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    // Simulate a successful login (replace with actual login logic)
    navigate('/dashboard'); // Redirect to dashboard on success
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
            {error.email && <div className="error">{error.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="error">{error.password}</div>}
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
