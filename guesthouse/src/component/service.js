import React from 'react';
import '../styles/service.css';
import { FaShieldAlt, FaConciergeBell, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa';
import securityImage from '../images/security.webp';
import roomServiceImage from '../images/header.jpg';
import restaurantImage from '../images/restaurent.jpg';
import touristGuideImage from '../images/mithonDam.webp';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <p className="services-tagline">Strive Only For The Best</p>
      <div className="services-list">
        <div className="service-item">
          <FaShieldAlt className="service-icon" />
          <img src={securityImage} alt="High Class Security" />
          <h3>High Class Security</h3>
        </div>
        <div className="service-item">
          <FaConciergeBell className="service-icon" />
          <img src={roomServiceImage} alt="24 Hours Room Service" />
          <h3>24 Hours Room Service</h3>
        </div>
        <div className="service-item">
          <FaUtensils className="service-icon" />
          <img src={restaurantImage} alt="Restaurant" />
          <h3>Restaurant</h3>
        </div>
        <div className="service-item">
          <FaMapMarkedAlt className="service-icon" />
          <img src={touristGuideImage} alt="Tourist Guide Support" />
          <h3>Tourist Guide Support</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
