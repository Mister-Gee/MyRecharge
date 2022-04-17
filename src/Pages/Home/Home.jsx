import React from 'react';
import Frame from '../Components/Frame';
import HowItWorks from './SubComponents/HowItWorks';
import Landing from './SubComponents/Landing';
import Benefits from './SubComponents/Benefits';
import ServiceProvider from './SubComponents/ServiceProvider';
import Testimonials from './SubComponents/Testimonials';
import HomeFooter from './SubComponents/HomeFooter';
import AuthModal from '../Components/AuthModal';
import useStateManager from '../../utilities/StateManager';

const Home = () => {
  const stateManager = useStateManager()

  const handleLogin = () => {
    stateManager.authFormState.set("login")
    stateManager.showAuthModal.set(true)
  }

  return (
    <Frame title="Home" handleLogin={handleLogin}>
      <div className="home-wrapper">
        <AuthModal 
            show={stateManager.showAuthModal.get()}
            handleClose={() => stateManager.showAuthModal.set(false)}
            authState={stateManager.authFormState.get()}
            setAuthState={stateManager.authFormState.set}
        />
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