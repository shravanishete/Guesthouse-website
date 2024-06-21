import React, { useEffect, useState } from 'react';
import '../styles/about.css';
import guestHouseImage from '../images/out.jpg';
import '../component/navbar';

const AboutUs = () => {
  const [bookings, setBookings] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);

  useEffect(() => {
    const incrementCounter = (setCounter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += 1;
          setCounter(count);
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust the speed of counting here
    };

    incrementCounter(setBookings, 100);
    incrementCounter(setHappyCustomers, 90);
  }, []);

  return (
    <section id="about-us" className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="left-section">
          <div className="image-container">
            <img src={guestHouseImage} alt="Kingsukh Guest House" />
          </div>
        </div>
        <div className="right-section">
          <p>
            <span className="highlight">The Best Holidays Start Here!</span><br />
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam.<br />
            Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
            Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality.
            Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <div className="stats-container">
            <div className="stat-box">
              <h3>Bookings</h3>
              <p>{bookings}+</p>
            </div>
            <div className="stat-box">
              <h3>Happy Customers</h3>
              <p>{happyCustomers}+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
