import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
const navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about">About Us</Link></li>
      <li className="nav-item"><Link to="/service">Services</Link></li>
      <li className="nav-item"><Link to="/room">Rooms</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  );
};

export default navbar