import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/header.css';
import './navbar';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About Us</Link></li>
          <li className="nav-item"><Link to="/service">Services</Link></li>
          <li className="nav-item"><Link to="/room">Rooms</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-content">
        <h1 className="welcome-message"><strong>Welcome to Kingsukh Guest House!</strong></h1>
        <p className="welcome-text">Simple - Unique - Friendly</p>
        <button className="book-now-button">Book Now</button>
      </div>
    </header>
  );
};

export default Header;
