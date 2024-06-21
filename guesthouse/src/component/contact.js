
import React from 'react';
import '../styles/contact.css';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import contactImage from '../images/send msg.jpg';
import '../component/navbar';

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us">
      <h2>Send Message</h2>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name"><FaUser className="form-icon" /> Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email"><FaEnvelope className="form-icon" /> Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact"><FaPhone className="form-icon" /> Contact</label>
              <input type="tel" id="contact" name="contact" required />
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
