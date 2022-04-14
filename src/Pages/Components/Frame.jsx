import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HelmetTemplate from './HelmetTemplate';

const Frame = ({title, children}) => {
  return (
    <>
    <Header />
    <HelmetTemplate title={title}/>
        {children}
    <Footer />
    </>
  )
}

export default Frame