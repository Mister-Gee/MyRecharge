import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
        <div className='right'>
          © {year} MyRecharge Nigeria. All rights reserved
        </div>
        <div className='links'>
            <Link to="/terms-and-conditions" className='footer-link-divider'>Terms & Conditions</Link>
            <Link to="/privacy-policy" className='footer-link-divider'>Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
        </div>
    </footer>
  )
}

export default Footer