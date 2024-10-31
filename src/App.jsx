import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Destinations } from './components/Destinations/Destinations';
import { Tour } from './components/Tour/Tour';
import { Contactus } from './components/Contactus/Contactus';
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import { Dashboard } from './components/Dashboard/Dashboard';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Divdash } from './components/Dashboard/Divdash/Divdash';
import { Users } from './components/Dashboard/Users/Users';
import { Tourds } from './components/Dashboard/Tourds/Tourds';
import { Bookingds } from './components/Dashboard/Bookingds/Bookingds';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path='' element={<Divdash />} />
          <Route path="users" element={<Users />} />
          <Route path="tourds" element={<Tourds />} />
          <Route path="bookingds" element={<Bookingds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
