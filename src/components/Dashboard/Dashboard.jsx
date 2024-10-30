import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './Dashboard.css';
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='dashboard'>
        <div className='sidebar'>
          <div className='sbbd'>
            <div className="titleds">
              <h1><Link to=""><span>Dashboard</span></Link></h1>
            </div>
            <div className="usersds">
              <h3><Link to="users"><span>Users</span></Link></h3>
            </div>
            <div className="tourds">
              <h3><Link to="tourds"><span>Tour</span></Link></h3>
            </div>
            <div className="bookingds">
              <h3><Link to="bookingds"><span>Booking</span></Link></h3>
            </div>
            <div className="logoutds">
              <h3><Link to="/login"><span>Logout</span></Link></h3>
            </div>
          </div>
        </div>
        <div className="contents">
            <Outlet/>
        </div>
      </div>
      <Footer />
    </>
  );
};
