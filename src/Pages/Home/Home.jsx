import React from 'react';
import Frame from '../Components/Frame';
import HowItWorks from './SubComponents/HowItWorks';
import Landing from './SubComponents/Landing';
import Benefits from './SubComponents/Benefits';
import ServiceProvider from './SubComponents/ServiceProvider';
import Testimonials from './SubComponents/Testimonials';
import HomeFooter from './SubComponents/HomeFooter';

const Home = () => {
  return (
    <Frame title="Home">
      <div className="home-wrapper">
        <Landing />
        <HowItWorks />
        <Benefits />
        <ServiceProvider />
        <Testimonials />
        <HomeFooter />
      </div>
    </Frame>
  )
}

export default Home