import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sidenav'>
        <div className='nav-link-wrapper'>
            <NavLink to="/buy-token" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='side-nav-icon'>
                    <span className="iconify" data-icon="lucide:battery-charging"></span>
                </span>    
                Buy Token
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/transaction-history" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='side-nav-icon'>
                    <span className="iconify" data-icon="lucide:credit-card"></span>
                </span>    
                Transactions
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/my-meter" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='side-nav-icon'>
                <span className="iconify" data-icon="carbon:list-dropdown" style={{transform: "rotate(180deg)"}}></span>
                </span>    
                My Meters
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/profile" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='side-nav-icon'>
                    <span className="iconify" data-icon="bx:user"></span>
                </span>    
                My Profile
            </NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/settings" className={(navData) => navData.isActive && "active-link active-link-border"}>
                <span className='side-nav-icon'>
                    <span className="iconify" data-icon="carbon:settings"></span>
                </span>    
                Settings
            </NavLink>
        </div>
    </div>
  )
}

export default SideNav