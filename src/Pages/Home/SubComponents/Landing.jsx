import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { quick_register } from '../../../Services/accountService';
import useStateManager from '../../../utilities/StateManager';
import {useNavigate} from 'react-router-dom';
import { serviceError } from '../../../utilities/functions';
import { setUserToken } from '../../../utilities/userTokens';
import { Spinner } from 'react-bootstrap';


const Landing = () => {
    let navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState("")
    const [showError, setShowError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const stateMananger = useStateManager()

    const onSubmit = async () => {
        try{
            if(phoneNumber){
                var intRegex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                var isPhoneNumberValid = intRegex.test(phoneNumber);
                if (!isPhoneNumberValid) {
                    setError("Phone Number is Not Valid")
                    setShowError(true)
                    setTimeout(() => {
                        setShowError(false)
                    }, 1500) 
                }
                else{
                    setIsSubmitting(true)
                    let reqBody = {
                        "phoneNumber": phoneNumber
                    }
                    const res = await quick_register(reqBody);
                    if(res.status === 200){
                        stateMananger.user.fullname.set(res.data.response.fullname)
                        stateMananger.user.emailAddress.set(res.data.response.emailAddress)
                        stateMananger.user.phoneNumber.set(res.data.response.mobileNumber)
                        setUserToken(res.data.response.securityToken)
                        
                        setIsSubmitting(false)
                        navigate("/buy-token")
                    }
                    else{
                        setError(res.data.message)
                        setShowError(true)
                        setTimeout(() => {
                            setShowError(false)
                        }, 1500)
                        setIsSubmitting(false)
                    }
                    
                }
            }
            else{
                setError("Phone Number Can't be Empty")
                setShowError(true)
                setTimeout(() => {
                    setShowError(false)
                }, 1500)   
            }
        }
        catch(err){
            serviceError(err, setError, setShowError)
            setIsSubmitting(false)
            setTimeout(() => {
                setShowError(false)
            }, 1500)  
        }
    }
  return (
    <div className='landing-bg'>
        <div className='landing-bg-wrapper'>
            <div className='landing-txt'>
                <div className='landing-txt-header'>Efficient electricity payment anytime </div>
                <div className='landing-txt-sub-header'>Enter your phone number to purchase your token </div>
                <div className='landing-txt-textbox'>
                    <Form.Group className="mb-3">
                        <Form.Control 
                            type='text'
                            maxLength={13}
                            placeholder="0000-000-0000" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            id="phoneNumber"
                            name="phoneNumber"
                        />
                    </Form.Group>
                </div>
                {showError &&
                    <div className='buy-token-error'>
                        <span className="iconify" data-icon="icons8:cancel"></span>
                        <span className='error-text'>{error}</span>
                    </div>
                }
                <div className='landing-txt-btn'>
                    <button 
                        className='secondary-button btn' 
                        onClick={onSubmit} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ?
                            <Spinner animation="border" size="sm" />
                            :
                            "Buy Token"
                        }
                    </button>
                </div>
            </div>
            <div className='landing-img'>
                <img src="./assets/images/landing-image.png" alt="my recharge"/>
            </div>
        </div>
    </div>
  )
}

export default Landing