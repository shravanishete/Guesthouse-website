import React from 'react';
import '../styles/room.css';
import '../component/navbar';
import smallImage from '../images/small.jpg';
import largeImage from '../images/large.jpg';
import recepImage from '../images/recep.jpg';
import room1Image from '../images/room1.jpg';
import bg from'../images/roombg.avif';

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="rooms-header">
        <h2>Our Rooms</h2>
        <img src={bg} alt="Decoration" id="bg"className="corner-image" />
      </div>
      <div className="room-list">
        <div className="room-item">
          <img src={recepImage} alt="Room 1" />
        </div>
        <div className="room-item">
          <img src={largeImage} alt="Room 2" />
        </div>
        <div className="room-item">
          <img src={room1Image} alt="Room 3" />
        </div>
        <div className="room-item">
          <img src={smallImage} alt="Room 4" />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
