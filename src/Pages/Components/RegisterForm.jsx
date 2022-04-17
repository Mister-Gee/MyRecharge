import React, {useState} from 'react';
import { Modal, InputGroup, Form } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { register } from '../../Services/accountService';
import { serviceError } from '../../utilities/functions';
import useStateManager from '../../utilities/StateManager';
import { setUserToken } from '../../utilities/userTokens';
import {useNavigate} from 'react-router-dom';

const RegisterForm = ({setAuthState}) => {
    let navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [errorShow, setErrorShow] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [pwdState, setPwdState] = useState(true)

    const stateManager = useStateManager()

    const [regUserDTO, setRegUserDTO] = useState({
        "fullname": "",
        "phoneNumber": "",
        "emailAddress": "",
        "password": ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setRegUserDTO(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onsubmit = async() => {
        if(regUserDTO.fullname !== ""){
            if(regUserDTO.phoneNumber !== ""){
                if(regUserDTO.emailAddress !== ""){
                    if(regUserDTO.password !== ""){
                        try{
                            setIsSubmitting(true)
                            let res = await register(regUserDTO)
                            if(res.status === 200 && res.data.response !== null){
                                stateManager.user.fullname.set(res.data.response.fullname)
                                stateManager.user.emailAddress.set(res.data.response.emailAddress)
                                stateManager.user.phoneNumber.set(res.data.response.mobileNumber)
                                stateManager.user.userId.set(res.data.response.userId)

                                setUserToken(res.data.response.securityToken)
                                setIsSubmitting(false)
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
                    setError("Email Cant be Empty")
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
        else{
            setError("Full Name Cant be Empty")
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
            <Modal.Title className="auth-title">Register to continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {errorShow &&
            <div className={isSuccess ? 'auth-message green' : 'auth-message red'}>
                {error}
            </div>
        }
        <Form className="auth-form">
            <Form.Group className="mb-3 form-group">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    id="fullname"
                    name="fullname"
                    value={regUserDTO.fullname}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Phone number:</Form.Label>
                <Form.Control 
                    maxLength={13}
                    type="text" 
                    placeholder="Phone Number" 
                    id="phoneNumber"
                    name="phoneNumber"
                    value={regUserDTO.phoneNumber}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Email address" 
                    id="emailAddress"
                    name="emailAddress"
                    value={regUserDTO.emailAddress}
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
                        value={regUserDTO.password}
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

            <Form.Group className="mb-3 form-group">
                <button className='auth-btn'  type="button" onClick={onsubmit} disabled={isSubmitting}>
                    {
                        isSubmitting ?
                        <Spinner animation="border" size="sm" />
                        :
                        "Register"
                    }
                </button>
            </Form.Group>
        </Form>
        <div className='auth-additional-link'>
            Already have an account? <span onClick={() => setAuthState("login")}>Login</span>
        </div>
        </Modal.Body>
    </>
  )
}

export default RegisterForm