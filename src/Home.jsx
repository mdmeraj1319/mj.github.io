import React from 'react';
import Button from '@material-ui/core/Button';
import web from './Images/img2.svg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () => {
  return(
    <>
      <Common name='Grow your buisness with' imgsrc={web} visit="/service" btname="Get Started" />
    </>
  );
}

export default Home;