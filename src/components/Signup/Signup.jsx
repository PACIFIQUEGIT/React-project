import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({}); // Reset error messages on submit

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
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Email or Phone</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{error.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password (10+ characters)</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{error.password}</div>
            <div className="show-password">
              <input
                type="checkbox"
                id="show-password"
                onClick={togglePassword}
              />{' '}
              Show
            </div>
          </div>
          <p className="signupparagraph">
            By clicking Agree & Join or Continue, you agree to the HolidayPlanner 
            <a href="">User Agreement</a>, <a href="">Privacy Policy</a>, and <a href="">Cookie Policy</a>.
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </>
  );
};
