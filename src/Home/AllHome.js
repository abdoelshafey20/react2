import React from 'react';
import Navbar from '../Navbar';
import Header from './Header';
import About from './About';
import Device from './Device';
import Age from './Age';
import Start from './Start';
import Get from './Get';
import Footer from './Footer';
import "./App.css";

function AllHome() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Start/>
      <Get/>
      <Footer/>
      

    </div>
  )
}

export default AllHome;
