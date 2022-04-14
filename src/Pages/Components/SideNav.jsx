import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sidenav'>
        <div className='nav-link-wrapper'>
            <NavLink to="/buy-token" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='token-nav-icon'>
                    <img src="./assets/images/battery-charging.svg" alt="ic" />
                </span>    
                Buy Token
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/transaction-history" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='th-nav-icon'>
                    <img src="./assets/images/credit-card.svg" alt="ic" />
                </span>    
                Transactions
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/my-meter" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='mm-nav-icon'>
                    <img src="./assets/images/transaction-history.svg" alt="ic" />
                </span>    
                My Meters
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/profile" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='user-nav-icon'>
                    <img src="./assets/images/user.svg" alt="ic" />
                </span>    
                My Profile
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/settings" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='ss-nav-icon'>
                    <img src="./assets/images/settings.svg" alt="ic" />
                </span>    
                Settings
            </NavLink>
        </div>
    </div>
  )
}

export default SideNav