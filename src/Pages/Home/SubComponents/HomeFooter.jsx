import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <div className='home-footer'>
        <div className='company-detail'>
            <img src='./assets/images/footer-logo.svg' alt="My Recharge"/>
            <div className='body'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</div>
            <div className='social-media-link'>
                <a href="https://instagram.com/">
                    <img src="./assets/images/instagram.svg" alt='my recharge instagram'/>
                </a>
                <a href="https://facebook.com/">
                    <img src="./assets/images/facebook.svg" alt='my recharge facebook'/>
                </a>
                <a href="https://twitter.com/">
                    <img src="./assets/images/twitter.svg" alt='my recharge twitter'/>
                </a>
                <a href="https://youtube.com/">
                    <img src="./assets/images/youtube.svg" alt='my recharge youtube'/>
                </a>
            </div>
        </div>
        <div className='hf-link'>
            <div className='title'>Services</div>
            <Link to="/buy-token">Buy Meter Token</Link>
        </div>
        <div className='hf-link'>
            <div className='title'>Quick Links</div>
            <Link to="/transaction-history">My Transaction History</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className='hf-link'>
            <div className='title'>Reach us</div>
            <a href="mailto:hello@myrecharge.ng"> <img src="./assets/images/email-icon.svg" alt="email icon" /> <span>hello@myrecharge.ng</span></a>
            <a href="call:+91 98765 43210"> <img src="./assets/images/phone-icon.svg" alt="email icon" /> <span>+91 98765 43210</span></a>
        </div>
    </div>
  )
}

export default HomeFooter