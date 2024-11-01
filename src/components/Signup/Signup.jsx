import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message on submit

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 10) {
      setError('Password must be at least 10 characters');
      return;
    }

    // Simulate a successful signup (replace with actual signup logic)
    // If signup is successful, redirect to dashboard
    // For example, you might want to call an API here

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
            <div className="error">{error}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password (10+ characters)</label>
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
