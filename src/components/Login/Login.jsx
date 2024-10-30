import React from 'react'
import './Login.css'
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>

<Navbar/>
<div class="containerl">
    <form id="form" action="/dashboard">
        <h2>Login in</h2>
    <div class="form-group">
        <label for="email">Email or Phone</label>
        <input type="text" id="email"/>
        <div class="error"></div>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"/>
        <div class="error"></div>
        <div class="show-password">
            <input type="checkbox" id="show-password" onclick="togglePassword()"/> Show
        </div>
    </div>
    <a href="#">Forgot password?</a>
    <button type="submit">Login in</button>
    
    <div class="footer">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    </form>
</div>
<Footer/>
    
    </>
  )
}
