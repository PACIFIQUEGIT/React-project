import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <>
<div class="signheader">
    <a href="#"><img src="images/linkedinlogo.webp" alt=""/></a>
</div>
<div class="container">
    <form id="form" action="/">
        <h2>Sign in</h2>
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
    <button type="submit">Sign in</button>
    
    <div class="footer">
        <p>New to LinkedIn? <a href="signup.html">Sign Up</a></p>
    </div>
    </form>
</div>
<div class="">
    <div class="sidebar-useful-links">
        <a href="">About</a>
        <a href="">Accessibility</a>
        <a href="">Help Center</a>
        <a href="">Privacy Policy</a>
        <a href="">Advertising</a>
        <a href="">Get the App</a>
        <a href="">More</a>
        <div class="copyright-msg">
            <img src="images/linkedin.png" alt=""/>
            <p>Linkedup &#169; 2022. All right reserved</p>
        </div>
    </div>
</div>
    
    </>
  )
}
