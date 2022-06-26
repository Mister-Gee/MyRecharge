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
                <img src="./assets/images/user1.svg" alt="user"/>
            </div>
            {isAuth &&
                <div className="mn-phone">
                    <p>{stateManager.user.get().phoneNumber}</p>
                </div>
            }
            {!isAuth &&
            <div className="mn-authlinks">
                <NavLink to="#" className="btn-auth" onClick={handleLogin}>
                    <span className="iconify" data-icon="lucide:log-in"></span>
                    <span>Login</span>
                 </NavLink>
                <NavLink to="/buy-token" className="btn-auth">
                    <span className="iconify" data-icon="lucide:battery-medium"></span>
                    <span>Buy Token</span>
                </NavLink>
                {/* {isAuth &&
                <NavLink to="#" className="login-btn" onClick={logout}>
                    <span className="iconify" data-icon="ic:outline-logout"></span>
                    <span>Logout</span>
                </NavLink>
                } */}
            </div>
            }
            <div className="mn-navlinks">
                {!isAuth &&
                <NavLink to="/">
                    <span className="iconify link-icon" data-icon="bx:home-alt"></span>
                    <span>Home</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/buy-token">
                    <span className="iconify" data-icon="lucide:battery-charging"></span>
                    <span>Buy Token</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/transaction-history">
                    <span className="iconify" data-icon="lucide:credit-card"></span>
                    <span>Transaction History</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/my-meter">
                    <span className="iconify" data-icon="carbon:list-dropdown" style={{transform: "rotate(180deg)"}}></span>
                    <span>My Meter</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/profile">
                    <span className="iconify" data-icon="bx:user"></span>
                    <span>My Profile</span>
                    <span className="iconify link-caret" data-icon="ph:caret-right"></span>
                 </NavLink>
                }
                {isAuth &&
                <NavLink to="/settings">
                    <span className="iconify" data-icon="ci:settings"></span>
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
            {isAuth &&
            <div className="logout-link-section mt-5">
                <div className="logout-link" onClick={logout}>
                    <span className="iconify" data-icon="lucide:log-in" style={{transform: "rotate(180deg)"}}></span>
                    <span className="logout-text">Logout</span>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default MobileSideNav