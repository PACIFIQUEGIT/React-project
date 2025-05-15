import React, { useState, useEffect } from 'react';
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaLongArrowAltUp } from "react-icons/fa";

export const Footer = () => {
  
  const [showButton, setShowButton] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="cont6">
      <div className="content">
        <div className="div1">
          <div className="div1s">
            <div className='icon'><a href="#"><img src="https://html.geekcodelab.com/holiday-planners/assets/images/white-logo.png" alt="" /></a>
            <p><b>Holiday Planners</b> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.
            </p>
            </div>
            <form action="#">
              <input className='c6in' type="text" placeholder='Enter Your Email' required />
              <button>SUBMIT</button>
            </form>
            <div className="icon1"></div>
          </div>
          <div className="div1s">
            <h1>Navigation</h1>
            <hr />
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/destinations">Destination</Link>
              <Link to="/tour">Tour</Link>
              <Link to="/contactus">Contact Us</Link>
            </ul>
          </div>
          <div className="div1s">
            <h1>Need Help ?</h1>
            <hr />
            <div className="contacts">
                <p>Call Us</p>
                <p><a href="">+123 456 7890</a></p>
            </div>
            <div className="contacts">
                <p>Email for Us</p>
                <p><a href="">holidayplanners@gmail.com</a></p>
            </div>
            <div className="contacts">
                <p>Location</p>
                <p><a href="">Main Street, Victoria 8007.</a></p>
            </div>
            <div className="contacts">
                <p>Follow us</p>
                <p><a className='cons' href=""><FaFacebookF /></a> <a className='cons' href=""><FaInstagram /></a> <a className='cons' href=""><FaTwitter /></a></p>
            </div>
          </div>
        </div>
        <div className="div2">
            <div className="div2s">
            <p>Copyright &copy; 2024 <a className='geek' href="">Geek Code Lab</a>. All rights reserved.</p>
            </div>
            <div className="div2s">
                <span><a href="">Privacy Policy</a></span> <span><a href="">Terms of Use</a></span> <a href="">Cookie Policy</a>
            </div>
        </div>
      </div>
      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop} >
          <FaLongArrowAltUp />
        </button>
      )}
    </div>
  )
}
