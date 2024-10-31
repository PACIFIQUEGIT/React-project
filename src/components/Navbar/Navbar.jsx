import React, { useState } from 'react';
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='navbar'>
      <div className="content">
        <div className="icons">
          <div className="div1">
            <a href="mailto:holidayplanners@gmail.com"><MdMailOutline /> holidayplanners@gmail.com</a>
            <a className='b' href="tel:+1234567890"><FaPhoneAlt /> +1234567890</a>
          </div>
          <div className="div2">
            <a href="#"><FaFacebookF /></a>
            <a className='b' href="#"><FaInstagram /></a>
            <a className='b' href="#"><FaTwitter /></a>
          </div>
        </div>
        <div className="logo">
          <img src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png" alt="Holiday Planners Logo" />
          <div>
            <a className='button' href="#">Reserve</a>
            <a className='round' href="#"><IoSearch /></a>
            <a className='round icon' onClick={toggleDiv} role="button" aria-label="Toggle menu"><FaBars /></a>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="overlay">
          <img className='img' src="https://html.geekcodelab.com/holiday-planners/assets/images/logo-icon-white.svg" alt="Holiday Planners Icon" />
          <div className="divicon">
            <IoLogoFacebook className='mrgnbt' />
            <FaInstagramSquare className='mrgnbt' />
            <AiFillTwitterCircle className='mrgnbt' />
          </div>
          <div className="overlay-content">
            <div><img src="https://html.geekcodelab.com/holiday-planners/assets/images/white-logo.png" alt="White Holiday Planners Logo" /></div>
            <div className="pagesas">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/destinations">Destination</Link>
              <Link to="/tour">Tour</Link>
              <Link to="/contactus">Contact Us</Link>
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Outlet />
              </div>
              <Outlet />
            </div>
          </div>
          <a className='round icon' onClick={toggleDiv} role="button" aria-label="Close menu"><IoMdClose /></a>
        </div>
      )}
    </div>
  );
};
