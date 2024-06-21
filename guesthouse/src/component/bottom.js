import React from 'react';
import '../styles/bottom.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import mapImage from '../images/map.png';

import hotelImage2 from '../images/flower.jpg';

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <div className="bottom-content">
        <div className="bottom-column">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><FaEnvelope /> kkghosh0099@gmail.com</p>
          <p><FaPhone /> +91 9007062180</p>
        </div>
        <div className="bottom-column">
          <h3>Find Us</h3>
          <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863373,86.8572155,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu" target="_blank" rel="noopener noreferrer">
            <img src={mapImage} alt="Google Map" id='map' className="map-image" />
          </a>
        </div>
        <div className="bottom-column">
          <h3>Other Amenities</h3>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>
        <div className="bottom-column">
          <h3>Gallery</h3>
          <img src={hotelImage2} alt="Hotel" className="hotel-image" />
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
