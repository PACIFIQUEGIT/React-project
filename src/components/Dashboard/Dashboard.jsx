// Dashboard.js
import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Link, Outlet } from "react-router-dom";
import './Dashboard.css';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='dashboard'>
        <div className='sidebar'>
          <h1><Link to="/">Dashboard</Link></h1>
          <Link to="users">Users</Link>
          <Link to="tourds">Tour</Link>
          <Link to="bookingds">Booking</Link>
          <Link to="/login">Logout</Link>
        </div>
        <div className="contents">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
