import React, {useState} from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import {Row, Col, InputGroup, FormControl, Form} from 'react-bootstrap';
import { serviceError } from '../../utilities/functions';
import { change_password } from '../../Services/accountService';
import { Spinner } from 'react-bootstrap';
import useStateManager from '../../utilities/StateManager';


const Settings = () => {
    
    const stateManager = useStateManager()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [errorShow, setErrorShow] = useState(false)

    const [currentPwdState, setCurrentPwdState] = useState(true)
    const [newPwdState, setNewPwdState] = useState(true)
    const [confirmNewPwdState, setConfirmNewPwdState] = useState(true)
    const [isEdit, setIsEdit] = useState(false)

    // Password Checks
    const [pwd, setPwd] = useState("")
    const [newPwd, setNewPwd] = useState("")
    const [confirmNewPwd, setConfirmNewPwd] = useState("")

    const [pwdLengthCheck, setPwdLengthCheck] = useState(false)
    const [numberPwdCheck, setNumberPwdCheck] = useState(false)
    const [symbolPwdCheck, setSymbolPwdCheck] = useState(false)



    const handlePwdChange = (val) => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        setNewPwd(val)
        
        if(newPwd.length > 4){
            setPwdLengthCheck(true)
        }
        else{
            setPwdLengthCheck(false)
        }

        let numMatchPattern = val.match(/\d+/g);
        if(numMatchPattern != null){
            setNumberPwdCheck(true)
        }
        else{
            setNumberPwdCheck(false)
        }

        if(format.test(val)){
            setSymbolPwdCheck(true)
        }
        else{
            setSymbolPwdCheck(false)
        }

    }

    const onsubmit = async() => {
        if(pwd !== ""){
            if(newPwd !== ""){
                if(confirmNewPwd !== ""){
                    if(pwdLengthCheck){
                        if(numberPwdCheck){
                            if(symbolPwdCheck){
                                if(newPwd === confirmNewPwd){
                                    try{
                                        setIsSubmitting(true)
                                        const payload = {
                                            userId: stateManager.user.userId.get(),
                                            password: pwd,
                                            newPassword: newPwd,
                                            confirmNewPassword: confirmNewPwd
                                        }
                                        let res = await change_password(payload)
                                        if(res.status === 200 && res.data.response !== null){
                                            setIsSubmitting(false)
                                            alert(res.data.message)
                                        }
                                        
                                    }
                                    catch(err){
                                        serviceError(err, setError, setErrorShow)
                                        alert(error)
                                    }
                                }
                                else{
                                    alert("New Password and Confirm Password does not match")
                                }
                            }
                            else{
                                alert("Password Does not Contain a Symbol")
                            }
                        }
                        else{
                            alert("Password does not contain Number")
                        }
                    }
                    else{
                        alert("New Password is Less than 5 Characters")
                    }
                }
                else{
                    alert("Confirm New Password Cant be Empty")
                }
            }
            else{
                alert("New Password cant be Empty")
            }
        }
        else{
            alert("Password Cant be Empty")
        }
    }

  return (
    <Frame title="Settings">
    <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
                <Breadcrumb 
                    icon="settings"
                    title="Settings"
                    isSearch={false}
                />
                <div className="content-section">
                    <div className='content-details'>
                        <div className='content-header'>
                            <div className="content-header-wrapper">
                                <div className='profile-dp'>
                                    <img src="./assets/images/key.svg" alt="key"/>
                                </div>
                                <div className="change-pwd">Change password</div>
                            </div>
                            {!isEdit &&
                                <div className='edit-user' onClick={() => setIsEdit(true)}>
                                    <span className="iconify" data-icon="clarity:note-edit-line"></span>
                                    <span>Change</span>
                                </div>
                            }
                        </div>
                        <div className='content-body'>
                        {isEdit &&
                            <>
                            <Row>
                                <Col lg={12}>
                                    <div className='mb-4'>
                                        <Form.Label>Current password</Form.Label>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Current password"
                                                type={currentPwdState ? "password" : "text"}
                                                value={pwd}
                                                onChange={(e) => setPwd(e.target.value)}
                                            />
                                             <InputGroup.Text id="pwdGroup" onClick={() => setCurrentPwdState(!currentPwdState)}>
                                                {
                                                    currentPwdState ?
                                                    <img src="./assets/images/eye.svg" alt="eye"/>
                                                    :
                                                    <img src="./assets/images/eye-off.svg" alt="eye-off"/>
                                                }
                                                <span className="input-group-texts">
                                                    {currentPwdState ?
                                                        <span>Show</span>
                                                        :
                                                        <span>Hide</span>
                                                    }
                                                </span>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='mb-4'>
                                        <Form.Label>New password</Form.Label>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="New password"
                                                type={newPwdState ? "password" : "text"}
                                                value={newPwd}
                                                onChange={(e) => handlePwdChange(e.target.value)}
                                            />
                                             <InputGroup.Text id="pwdGroup" onClick={() => setNewPwdState(!newPwdState)}>
                                                {
                                                    newPwdState ?
                                                    <img src="./assets/images/eye.svg" alt="eye"/>
                                                    :
                                                    <img src="./assets/images/eye-off.svg" alt="eye-off"/>
                                                }
                                                <span className="input-group-texts">
                                                    {newPwdState ?
                                                        <span>Show</span>
                                                        :
                                                        <span>Hide</span>
                                                    }
                                                </span>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='mb-4'>
                                        <div className="verification-check">
                                            <div className="verification-icon">
                                                {
                                                    !pwdLengthCheck ?
                                                    <img src="./assets/images/unverified-check.svg" alt="check-grey"/>
                                                    :
                                                    <img src="./assets/images/verified-check.svg" alt="check-green"/>
                                                }
                                            </div>
                                            <div className='verification-text'>At least 6 characters</div>
                                        </div>
                                        <div className="verification-check">
                                            <div className="verification-icon">
                                                {
                                                    !numberPwdCheck ?
                                                    <img src="./assets/images/unverified-check.svg" alt="check-grey"/>
                                                    :
                                                    <img src="./assets/images/verified-check.svg" alt="check-green"/>
                                                }
                                            </div>
                                            <div className='verification-text'>One number</div>
                                        </div>
                                        <div className="verification-check">
                                            <div className="verification-icon">
                                                {
                                                    !symbolPwdCheck ?
                                                    <img src="./assets/images/unverified-check.svg" alt="check-grey"/>
                                                    :
                                                    <img src="./assets/images/verified-check.svg" alt="check-green"/>
                                                }
                                            </div>
                                            <div className='verification-text'>One symbol</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className='mb-4'>
                                        <Form.Label>Confirm new password</Form.Label>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Confirm new password"
                                                type={confirmNewPwdState ? "password" : "text"}
                                                value={confirmNewPwd}
                                                onChange={(e) => setConfirmNewPwd(e.target.value)}
                                            />
                                             <InputGroup.Text id="pwdGroup" onClick={() => setConfirmNewPwdState(!confirmNewPwdState)}>
                                                {
                                                    confirmNewPwdState ?
                                                    <img src="./assets/images/eye.svg" alt="eye"/>
                                                    :
                                                    <img src="./assets/images/eye-off.svg" alt="eye-off"/>
                                                }
                                                <span className="input-group-texts">
                                                    {confirmNewPwdState ?
                                                        <span>Show</span>
                                                        :
                                                        <span>Hide</span>
                                                    }
                                                </span>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className='profile-edit-btns'>
                                    <button type="button" className='cancel-btn' onClick={() => setIsEdit(false)}>Cancel</button>
                                    <button type="button" className='save-btn' onClick={onsubmit} disabled={isSubmitting}>
                                    {
                                        isSubmitting ?
                                        <Spinner animation="border" size="sm" />
                                        :
                                        "Save"
                                    }
                                    </button>
                                </div>
                            </Row>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Frame>
  )
}

export default Settings