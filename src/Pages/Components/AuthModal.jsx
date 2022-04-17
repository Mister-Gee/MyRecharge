import React, {useState} from 'react';
import { Modal} from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';

const AuthModal = (props) => {
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.handleClose}
      show={props.show}
      className="auth-modal"
    >
    {props.authState === "login"
    ?
        <LoginForm 
            setAuthState={props.setAuthState}
        />
        :
        props.authState === "register"
        ?
        <RegisterForm 
            setAuthState={props.setAuthState}
        />   
        :
        props.authState === "reset"
        &&
        <ResetPasswordForm 
            setAuthState={props.setAuthState}
        />
    }
    </Modal>
  )
}

export default AuthModal