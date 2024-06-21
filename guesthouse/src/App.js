import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/index';
import Service from './component/service';
import Rooms from './component/room';
import Contact from './component/contact';
import Footer from './component/footer';
import Aboutus from './component/about';
import Bottom from './component/bottom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       < Header />
      <Routes>
         <Route path='/'element={<Header />}/>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
      <Aboutus />
      <Service />
      <Rooms />
      <Contact />
      <Bottom />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
