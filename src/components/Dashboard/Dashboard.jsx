import React from 'react';
import { MdTour } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import './Dashboard.css';
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

export const Dashboard = () => {
  return (
    <>
      
      <div className='dashboard'>
        <div className='sidebar'>
          <div className='sbbd'>
            <div className="titleds">
              <h1><Link to="" style={{textDecoration: 'none'}}><span className='dash'>Dashboard</span></Link></h1>
            </div>
            <div className='resp'>
            <div className="usersds">
              <div className='trfic1'><FaUser /></div>
              <h3><Link to="users" style={{textDecoration: 'none'}}><span>Users</span></Link></h3>
            </div>
            <div className="tourds">
              <div className='trfic1'><MdTour /></div>
              <h3><Link to="tourds" style={{textDecoration: 'none'}}><span>Tour</span></Link></h3>
            </div>
            <div className="bookingds">
              <div className='trfic1'><FaBookmark /></div>
              <h3><Link to="bookingds" style={{textDecoration: 'none'}}><span>Booking</span></Link></h3>
            </div>
            <div className="logoutds">
              <div className='trfic1'><IoLogOutSharp /></div>
              <h3><Link to="/login" style={{textDecoration: 'none'}}><span>Logout</span></Link></h3>
            </div>
            </div>
          </div>
        </div>
        <div className="contents">
            <Outlet/>
        </div>
      </div>
      
    </>
  );
};
