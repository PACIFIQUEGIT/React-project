import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'; // Adjust the path as needed
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Destinations } from './components/Destinations/Destinations';
import { Tour } from './components/Tour/Tour';
import { Contactus } from './components/Contactus/Contactus';
import { Login } from './components/Login/Login';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
