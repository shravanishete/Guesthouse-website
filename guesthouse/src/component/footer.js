import React from 'react';
import '../styles/footer.css';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-icon youtube" /></a>
        <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon instagram" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon facebook" /></a>
      </div>
      <p>&copy; 2024 Kingsukh Guest House. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
