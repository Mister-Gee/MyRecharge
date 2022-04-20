import React, {useState, useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { MenuContext } from "react-flexible-sliding-menu";
import { getUserToken } from '../../utilities/userTokens';
import useStateManager from '../../utilities/StateManager';
import { logout, getUserFromLocalStorage } from '../../utilities/userTokens';


const Header = ({handleLogin}) => {
    const token = getUserToken()
    const stateManager = useStateManager()
    
    const { toggleMenu } = useContext(MenuContext);
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(token){
            setIsAuth(true)
        }
        else{
            setIsAuth(false)
        }
    }, [token])


    useEffect(() => {
        if(token && (stateManager.user.phoneNumber.get() === null || stateManager.user.phoneNumber.get() === "")){
            let user = getUserFromLocalStorage()
            stateManager.user.phoneNumber.set(user.mobileNumber)
            stateManager.user.userId.set(user.userId)
            stateManager.user.emailAddress.set(user.emailAddress)
        }
    },[token])

    
  return (
    <header>
        <div className='logo-container'>
            <img src='./assets/images/logo.svg' alt="My Recharge"/>
        </div>
        <div className='nav-link-section'>
            <div className='support-flag'>
                24 Hour Support 0908-749-3044
            </div>
            <div className='mr-nav-links'>
                {isAuth && <NavLink to="/buy-token" className={(navData) => navData.isActive && "active-link"}>Buy Token</NavLink>}
               {isAuth && <NavLink to="/transaction-history" className={(navData) => navData.isActive && "active-link"}>Transaction History</NavLink>}
                <NavLink to="/faq" className={(navData) => navData.isActive && "active-link"}>FAQ</NavLink>
                <NavLink to="/contact-us" className={(navData) => navData.isActive && "active-link"}>Contact Us</NavLink>
               {!isAuth && <div className="loginBtn btn" onClick={handleLogin}>Login</div>}
                {/* {!isAuth && <NavLink to="/buy-token" className="secondary-button btn">Buy Token</NavLink>} */}
                {isAuth && <Dropdown className='dropdown-ml'>
                    <Dropdown.Toggle id="dropdown-basic" className="primary-button btn dropdown-btn">
                        {stateManager.user.phoneNumber.get()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/profile" className="dropdown-links">
                            <img src="./assets/images/user.svg" alt="user"/>
                            <span className='dropdown-navlink'>My Profile</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/settings" className="dropdown-links">
                            <img src="./assets/images/lock.svg" alt="user"/>
                            <span className='dropdown-navlink'>Update Password</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logout} className="dropdown-links">
                            <img src="./assets/images/log-out.svg" alt="user"/>
                            <span className='dropdown-navlink'>Logout</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> }
            </div>
        </div>
        <div className='mobile-bar' onClick={toggleMenu}>
            <img src='./assets/images/nav-bar.svg' alt='nav bar'/>
        </div>
    </header>
  )
}

export default Header