import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";

const MobileSideNav = () => {

    const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu">
        <div className="mobile-nav-logo-section">
            <img src="./assets/images/logo.svg" alt="logo"/>
        </div>
        <div className="mobile-nav-link-section" onClick={closeMenu}>
            <div className="mn-user">
                <img src="./assets/images/user.svg" alt="user"/>
            </div>
            <div className="mn-authlinks">
                <NavLink to="/" className="login-btn">
                    <span className="iconify" data-icon="lucide:log-in"></span>
                    <span>Login</span>
                 </NavLink>
                <NavLink to="/buy-token" className="buy-token-btn">
                    <span className="iconify" data-icon="lucide:battery-medium"></span>
                    <span>Buy Token</span>
                </NavLink>
            </div>
            <div className="mn-navlinks">
                <NavLink to="/">
                    <span className="iconify link-icon" data-icon="bx:home-alt"></span>
                    <span>Home</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                <NavLink to="/faq">
                    <span className="iconify link-icon" data-icon="lucide:help-circle"></span>
                    <span>FAQ</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                </NavLink>
                <NavLink to="/contact-us">
                    <span className="iconify link-icon" data-icon="bi:send"></span>
                    <span>Contact Us</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default MobileSideNav