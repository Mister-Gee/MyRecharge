import React, {useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import { getUserToken } from '../../utilities/userTokens';
import useStateManager from '../../utilities/StateManager';
import { logout, getUserFromLocalStorage } from '../../utilities/userTokens';

const MobileSideNav = () => {

    const { closeMenu } = useContext(MenuContext);

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
        }
    },[token])

    const handleLogin = () => {
        stateManager.authFormState.set("login")
        stateManager.showAuthModal.set(true)
    }

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
                {!isAuth &&
                <NavLink to="#" className="login-btn" onClick={handleLogin}>
                    <span className="iconify" data-icon="lucide:log-in"></span>
                    <span>Login</span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/buy-token" className="buy-token-btn">
                    <span className="iconify" data-icon="lucide:battery-medium"></span>
                    <span>Buy Token</span>
                </NavLink>
                }
                {isAuth &&
                <NavLink to="#" className="login-btn" onClick={logout}>
                    <img src="./assets/images/log-out.svg" alt="user"/>
                    <span>Logout</span>
                </NavLink>
                }
            </div>
            <div className="mn-navlinks">
                {!isAuth &&
                <NavLink to="/">
                    <span className="iconify link-icon" data-icon="bx:home-alt"></span>
                    <span>Home</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/transaction-history">
                    <img src="./assets/images/credit-card.svg" alt="ic" />
                    <span>Transaction History</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/my-meter">
                    <img src="./assets/images/transaction-history.svg" alt="ic" />
                    <span>My Meter</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/profile">
                    <img src="./assets/images/user.svg" alt="ic" />
                    <span>My Profile</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/settings">
                    <img src="./assets/images/settings.svg" alt="ic" />
                    <span>Settings</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
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