import React, {useContext} from 'react';
import Footer from './Footer';
import Header from './Header';
import HelmetTemplate from './HelmetTemplate';
import { MenuContext } from "react-flexible-sliding-menu";


const Frame = ({title, children, handleLogin}) => {
  const { closeMenu } = useContext(MenuContext);
  return (
    <>
    <Header handleLogin={handleLogin}/>
    <HelmetTemplate title={title}/>
      <div onClick={closeMenu}>
        {children}
      </div>
    <Footer />
    </>
  )
}

export default Frame