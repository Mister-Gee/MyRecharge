import React, {useState, useContext} from 'react';
import Footer from './Footer';
import Header from './Header';
import HelmetTemplate from './HelmetTemplate';
import { MenuContext } from "react-flexible-sliding-menu";
import AuthModal from './AuthModal';
import useStateManager from '../../utilities/StateManager';


const Frame = ({title, children}) => {
  const stateManager = useStateManager()
  const [isShowContact, setIsShowContact] = useState(false)
  const { closeMenu } = useContext(MenuContext);

  const handleContactShow = () =>{
    setIsShowContact(!isShowContact)
  }

  const handleLogin = () => {
    stateManager.authFormState.set("login")
    stateManager.showAuthModal.set(true)
  }

  return (
    <>
    <Header handleLogin={handleLogin}/>
    <HelmetTemplate title={title}/>
      <div onClick={closeMenu}>
        {children}
      </div>
      <AuthModal 
          show={stateManager.showAuthModal.get()}
          handleClose={() => stateManager.showAuthModal.set(false)}
          authState={stateManager.authFormState.get()}
          setAuthState={stateManager.authFormState.set}
      />
      <div className="floating-component">
        {isShowContact &&
        <div className='c-bubble'>
          <img src="./assets/images/contactBubble.svg" alt=' chatbubble' />
          <div className='c-bubble-text'>
            <span className='c-bubble-text-desc'>
              <span className="iconify" data-icon="ic:baseline-support-agent"></span>
              <span className='c-cuccle-text-body'>24hours support, call</span>
            </span>
            <span className='c-bubble-number'>+234 916 854 5835</span>
          </div>
        </div>
        }
        <div className='contact-icon'>
          <img onClick={handleContactShow} src={isShowContact ? "./assets/images/closeContactIcon.svg" : "./assets/images/contactIcon.svg"} alt='contact'/>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Frame