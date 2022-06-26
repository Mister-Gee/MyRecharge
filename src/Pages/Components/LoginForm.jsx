import React, {useState} from 'react';
import { Modal, InputGroup, Form } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { login } from '../../Services/accountService';
import { serviceError } from '../../utilities/functions';
import useStateManager from '../../utilities/StateManager';
import { setUserToken } from '../../utilities/userTokens';
import {useNavigate} from 'react-router-dom';

const LoginForm = ({setAuthState}) => {
    let navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [errorShow, setErrorShow] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [pwdState, setPwdState] = useState(true)

    const [loginUserDTO, setloginUserDTO] = useState({
        "emailOrPhone": "",
        "password": ""
    })

    const stateManager = useStateManager()
    const handleChange = e => {
        const { name, value } = e.target;
        setloginUserDTO(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

const onsubmit = async() => {
        if(loginUserDTO.phoneNumber !== ""){
            if(loginUserDTO.password !== ""){
                try{
                    setIsSubmitting(true)
                    let res = await login(loginUserDTO)
                    if(res.status === 200 && res.data.response !== null){
                        stateManager.user.fullname.set(res.data.response.fullname)
                        stateManager.user.emailAddress.set(res.data.response.emailAddress)
                        stateManager.user.phoneNumber.set(res.data.response.mobileNumber)
                        stateManager.user.userId.set(res.data.response.userId)

                        setUserToken(res.data.response.securityToken)
                        setIsSubmitting(false)
                        stateManager.showAuthModal.set(false)
                        navigate("/buy-token")
                    }
                    
                }
                catch(err){
                    serviceError(err, setError, setErrorShow)
                    setIsSubmitting(false)
                    setTimeout(() => {
                        setErrorShow(false)
                    }, 5000)
                }
            }
            else{
                setError("Password cant be Empty")
                setIsSuccess(false)
                setErrorShow(true)
                setTimeout(() => {
                    setErrorShow(false)
                }, 5000)
            }
        }
        else{
            setError("Phone Number cant be Empty")
            setIsSuccess(false)
            setErrorShow(true)
            setTimeout(() => {
                setErrorShow(false)
            }, 5000)
        }
    }

  return (
    <>
        <Modal.Header closeButton>
            <Modal.Title className="auth-title">Login to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {errorShow &&
                <div className={isSuccess ? 'auth-message green' : 'auth-message red'}>
                    {error}
                </div>
            }
            <Form className="auth-form"> 
            <Form.Group className="mb-3 form-group">
                <Form.Label>Phone number:</Form.Label>
                <Form.Control 
                    maxLength={13}
                    type="text" 
                    placeholder="Phone Number" 
                    id="emailOrPhone"
                    name="emailOrPhone"
                    value={loginUserDTO.emailOrPhone}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Password:</Form.Label>
                <InputGroup>
                    <Form.Control
                        placeholder="Password"
                        type={pwdState ? "password" : "text"}
                        id="password"
                        name="password"
                        value={loginUserDTO.password}
                        onChange={handleChange}
                    />
                        <InputGroup.Text onClick={() => setPwdState(!pwdState)}>
                        {
                            pwdState ?
                            <img src="./assets/images/eye.svg" alt="eye"/>
                            :
                            <img src="./assets/images/eye-off.svg" alt="eye-off"/>
                        }
                        <span className="input-group-texts">
                            {pwdState ?
                                <span>Show</span>
                                :
                                <span>Hide</span>
                            }
                        </span>
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <div className='auth-additional-link2'>
                <span onClick={() => setAuthState("reset")}>Forget Password?</span>
            </div>
            <Form.Group className="mb-3 form-group">
                <button className='auth-btn'  type="button" onClick={onsubmit} disabled={isSubmitting}>
                    {
                        isSubmitting ?
                        <Spinner animation="border" size="sm" />
                        :
                        "Login"
                    }
                </button>
            </Form.Group>
        </Form>
        <div className='auth-additional-link'>
            Don't have an account? <span onClick={() => setAuthState("register")}>Register</span>
        </div>
        </Modal.Body>
    </>
  )
}

export default LoginForm