import React, {useState} from 'react';
import { Modal, Form, InputGroup } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { forgot_password, validate_password_reset_code, reset_password } from '../../Services/accountService';
import { serviceError } from '../../utilities/functions';
import useStateManager from '../../utilities/StateManager';
import { setUserToken } from '../../utilities/userTokens';
import {useNavigate} from 'react-router-dom';

const ResetPasswordForm = ({setAuthState}) => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [errorShow, setErrorShow] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [resetPwdSteps, setResetPwdSteps] = useState(1)
    const [resetCode, setResetCode] = useState("")

    const [pwd, setPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [pwdState, setPwdState] = useState(true)
    const [confirmPwdState, setConfirmPwdState] = useState(true)

    const stateManager = useStateManager()

    const [forgotPwdDTO, setforgotPwdDTO] = useState({
        "emailOrPhone": ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setforgotPwdDTO(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onsubmitReset = async() => {
        if(forgotPwdDTO.emailOrPhone !== ""){
            try{
                setIsSubmitting(true)
                let res = await forgot_password(forgotPwdDTO)
                if(res.status === 200){
                    setError("Password Reset Link sent successfully! Please check your SMS or Email Inbox for the reset link.")
                    setIsSuccess(true)
                    setErrorShow(true)
                    setResetPwdSteps(2)
                }
                setIsSubmitting(false)
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
            setError("Phone Number cant be Empty")
            setIsSuccess(false)
            setErrorShow(true)
            setTimeout(() => {
                setErrorShow(false)
            }, 5000)
        }
    }

    const onsubmitResetCode = async() => {
        if(resetCode !== ""){
            try{
                setIsSubmitting(true)
                const payload = {
                    emailOrPhone: forgotPwdDTO.emailOrPhone,
                    resetCode: resetCode
                }
                let res = await validate_password_reset_code(payload)
                if(res.status === 200){
                    setError("Reset Code Confirmed, Kindly enter your new Password")
                    setIsSuccess(true)
                    setErrorShow(true)
                    setResetPwdSteps(3)
                }
                setIsSubmitting(false)
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
            setError("Reset Code cant be Empty")
            setIsSuccess(false)
            setErrorShow(true)
            setTimeout(() => {
                setErrorShow(false)
            }, 5000)
        }
    }

    const onChangePwd = async() => {
        if(pwd !== "" && confirmPwd !== ""){
            if(pwd === confirmPwd){
                try{
                    setIsSubmitting(true)
                    const payload = {
                        resetCode: resetCode,
                        emailOrPhone: forgotPwdDTO.emailOrPhone,
                        password: pwd,
                        confirmPassword: confirmPwd
                    }
                    let res = await reset_password(payload)
                    if(res.status === 200){
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
                setError("Password Does not match")
                setIsSuccess(false)
                setErrorShow(true)
                setTimeout(() => {
                    setErrorShow(false)
                }, 5000)
            }
        }
        else{
            setError("Password or Confirm cant be Empty")
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
            <Modal.Title className="auth-title">Reset Password</Modal.Title>
        </Modal.Header>
        {resetPwdSteps === 1 ?
        <>
        <Modal.Body>
            <Form className="auth-form"> 
            <Form.Group className="mb-3 form-group">
                <Form.Label>Enter your registered Phone number:</Form.Label>
                <Form.Control 
                    maxLength={13}
                    type="text" 
                    placeholder="Phone Number" 
                    id="emailOrPhone"
                    name="emailOrPhone"
                    value={forgotPwdDTO.emailOrPhone}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <button className='auth-btn'  type="button" onClick={onsubmitReset} disabled={isSubmitting}>
                    {
                        isSubmitting ?
                        <Spinner animation="border" size="sm" />
                        :
                        "Send Reset Link"
                    }
                </button>
            </Form.Group>
        </Form>
        <div className='auth-additional-link'>
            Already have an account? <span onClick={() => setAuthState("login")}>Login</span>
        </div>
        </Modal.Body>
        </>
        :
        resetPwdSteps === 2 ?
        <>
        <Modal.Body>
            {errorShow &&
                <div className={isSuccess ? 'auth-message green' : 'auth-message red'}>
                    {error}
                </div>
            }
            <Form className="auth-form"> 
            <Form.Group className="mb-3 form-group">
                <Form.Label>Enter your Reset Code:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Reset Code" 
                    id="resetCode"
                    name="resetCode"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <button className='auth-btn'  type="button" onClick={onsubmitResetCode} disabled={isSubmitting}>
                    {
                        isSubmitting ?
                        <Spinner animation="border" size="sm" />
                        :
                        "Verify Reset Code"
                    }
                </button>
            </Form.Group>
        </Form>
        </Modal.Body>
        </>
        :
        resetPwdSteps === 3 &&
        <>
        <Modal.Body>
            {errorShow &&
                <div className={isSuccess ? 'auth-message green' : 'auth-message red'}>
                    {error}
                </div>
            }
            <Form className="auth-form"> 
            <Form.Group className="mb-3 form-group">
                <Form.Label>Password:</Form.Label>
                <InputGroup>
                    <Form.Control
                        placeholder="Password"
                        type={pwdState ? "password" : "text"}
                        id="password"
                        name="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
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
                <Form.Label>Confirm Password:</Form.Label>
                <InputGroup>
                    <Form.Control
                        placeholder="Password"
                        type={confirmPwdState ? "password" : "text"}
                        id="cpassword"
                        name="cpassword"
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                    />
                        <InputGroup.Text onClick={() => setConfirmPwdState(!confirmPwdState)}>
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
                <button className='auth-btn'  type="button" onClick={onChangePwd} disabled={isSubmitting}>
                    {
                        isSubmitting ?
                        <Spinner animation="border" size="sm" />
                        :
                        "Change Password"
                    }
                </button>
            </Form.Group>
        </Form>
        </Modal.Body>
        </>
        }
    </>
  )
}

export default ResetPasswordForm