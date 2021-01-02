import React from 'react';
import Button from '@material-ui/core/Button';
import web from './Images/about.jpg';
import logo from './Images/logo.png'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About = () => {
  return(
    <> 
      <Common 
        name=' Welcome to About Page' 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"
      />
    </>
  );
}

export default About;