import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './Signup.css'

export const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="containerl">
        <form id="form" action="/dashboard">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Email or Phone</label>
            <input type="text" id="email" />
            <div className="error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password (10+ characters)</label>
            <input type="password" id="password" />
            <div className="error"></div>
            <div className="show-password">
              <input type="checkbox" id="show-password" onClick={() => togglePassword()} /> Show
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
  )
}
