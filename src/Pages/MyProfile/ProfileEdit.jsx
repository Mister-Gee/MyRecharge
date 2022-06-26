import React, {useState} from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import useStateManager from '../../utilities/StateManager';
import { serviceError } from '../../utilities/functions';
import { customer_profile_update } from '../../Services/accountService';
import { Spinner } from 'react-bootstrap';
import { setUserToken } from '../../utilities/userTokens';
import { errorAlert, successAlert } from '../Components/SweetAlerts';


const ProfileEdit = ({setIsEdit}) => {
    const stateManager = useStateManager()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [errorShow, setErrorShow] = useState(false)

    const [userDetail, setUserDetail] = useState({
        userId: stateManager.user.userId.get(),
        fullname: stateManager.user.fullname.get(),
        emailAddress: stateManager.user.emailAddress.get(),
        phoneNumber: stateManager.user.phoneNumber.get()
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUserDetail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onsubmit = async() => {
        if(userDetail.fullname !== ""){
            if(userDetail.phoneNumber !== ""){
                if(userDetail.emailAddress !== ""){
                        try{
                            setIsSubmitting(true)
                            let res = await customer_profile_update(userDetail)
                            if(res.status === 200 && res.data.response !== null){
                                stateManager.user.fullname.set(res.data.response.fullname)
                                stateManager.user.emailAddress.set(res.data.response.emailAddress)
                                stateManager.user.phoneNumber.set(res.data.response.mobileNumber)
                                stateManager.user.userId.set(res.data.response.userId)

                                setUserToken(res.data.response.securityToken)
                                setIsSubmitting(false)
                                successAlert(res.data.message)
                            }
                        }
                        catch(err){
                            serviceError(err, setError, setErrorShow)
                            errorAlert(error)
                        }
                }
                else{
                    errorAlert("Email Cant be Empty")
                }
            }
            else{
                errorAlert("Phone Number cant be Empty")
            }
        }
        else{
            errorAlert("Full Name Cant be Empty")
        }
    }

  return (
    <div className='content-body'>
        <Row>
            <Col lg={12}>
                <div className='mb-2'>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control 
                      type="text" 
                        placeholder="Full Name" 
                        id="fullname"
                        name="fullname"
                        value={userDetail.fullname}
                        onChange={handleChange}
                    />
                </div>
            </Col>
        </Row>
        <Row>
        <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email address" 
                        id="emailAddress"
                        name="emailAddress"
                        value={userDetail.emailAddress}
                        onChange={handleChange}
                    />
                </div>
            </Col>
            <Col lg={6}>
                <div className='mb-2'>
                    <Form.Label>Mobile phone number</Form.Label>
                    <Form.Control
                        maxLength={13}
                        type="text" 
                        placeholder="Phone Number" 
                        id="phoneNumber"
                        name="phoneNumber"
                        value={userDetail.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </Col>
        </Row>
        <Row className='mt-3'>
            <div className='profile-edit-btns'>
                <button type="button" className='cancel-btn' onClick={() => setIsEdit(false)}>Cancel</button>
                <button type="button" className='save-btn' disabled={isSubmitting} onClick={onsubmit}>
                {
                    isSubmitting ?
                    <Spinner animation="border" size="sm" />
                    :
                    "Save"
                }
                </button>
            </div>
        </Row>
    </div>
  )
}

export default ProfileEdit