import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import Select from 'react-select';
import useStateManager from '../../../utilities/StateManager';
import { validate_customer } from '../../../Services/rechargeService';
import { Spinner } from 'react-bootstrap';
import { errorAlert } from '../../Components/SweetAlerts';
import jwt_encode from "jwt-encode";
import { serviceError } from '../../../utilities/functions';

const BuyTokenForm = ({setSteps, stateDiscos, isStateDiscosLoading, tokenObject, setTokenObject, refetchStateDiscos}) => {
    const [state, setState] = useState({})
    const [error, setError] = useState("")
    const [errorShow, setErrorShow] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isStateAvailable, setIsStateAvailable] = useState(true)


    const stateManager = useStateManager()

    useEffect(() => {
        var previousState = stateDiscos.find(x => x.stateID === tokenObject.stateId);
        setState(previousState)
    }, [tokenObject.stateId, isStateDiscosLoading])

    useEffect(() => {
        setTokenObject(prevState => ({
            ...prevState,
            phoneNumber: stateManager.user.phoneNumber.get()
         }));

        if(tokenObject.emailAddress === ""){
            if(stateManager.user.emailAddress.get() !== ""){
                setTokenObject(prevState => ({
                    ...prevState,
                    emailAddress: stateManager.user.emailAddress.get()
                 })); 
            }    
        }
        
        if(stateManager.user.fullname.get() !== ""){
            setTokenObject(prevState => ({
                ...prevState,
                customerName: stateManager.user.fullname.get()
             })); 
        }
    }, [])

    const handleStateSelect = (e) => {
        setState(e)
        if(e.serviceAvailable){
            setIsStateAvailable(true)
            setTokenObject(prevState => ({
                ...prevState,
                stateId: e.stateID
             }));
        }
        else{
            setIsStateAvailable(false)
            errorAlert(`Service Unavailable for ${e.stateName}-${e.discoName}(${e.discoCode}). Please try again in a moment`)
        }
        
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setTokenObject(prevState => ({
            ...prevState,
            [name]: name === "amount" ? parseInt(Math.abs(value.replace(/\D/g, ''))) : value
        }));
    };
    
    const handleClear = () => {
        setTokenObject(prevState => ({
            ...prevState,
            meterNo: ""
        }));
    }

    const onsubmit = async() => {
        if(tokenObject.amount !== "" && tokenObject.amount > 0 ){
            if(tokenObject.emailAddress !== ""){
                if(tokenObject.meterNo !== ""){
                    if(tokenObject.meterType !== ""){
                        if(tokenObject.phoneNumber !== ""){
                            if(tokenObject.stateId){
                                try{
                                    setIsSubmitting(true)
                                    const secret = 'myrecharge-byt-encoded';
                                    const encodedPayload = jwt_encode(tokenObject, secret)
                                    localStorage.setItem("mrep", encodedPayload)
                                    let payload = {
                                        "accountType": tokenObject.meterType,
                                        "customerEmail": tokenObject.emailAddress,
                                        "customerPhone": tokenObject.phoneNumber,
                                        "customerMeterNumber": tokenObject.meterNo,
                                        "stateId": tokenObject.stateId
                                    }
    
                                    let res = await validate_customer(payload)
                                    if(res.status === 200 && res.data.response !== null){
                                        // setTokenObject(prevState => ({
                                        //     ...prevState,
                                        //     customerName: res.data.response.customerName
                                        // })); 
                                        setTokenObject(prevState => ({
                                            ...prevState,
                                            customerNumber: res.data.response.customerNumber
                                        })); 
                                        stateManager.meterName.set(res.data.response.customerName)
                                        stateManager.meterAddress.set(res.data.response.customerAddress)
                                        setIsSubmitting(false)
                                        setSteps(2)
                                    }
                                }
                                catch(err){
                                    serviceError(err, setError, setErrorShow)
                                    errorAlert(error)
                                    setIsSubmitting(false)
                                }
                            }
                            else{
                                errorAlert("State Disco Cant be Empty")
                            }
                        }
                        else{
                            errorAlert("Phone Number cant be Empty")
                        }
                    }
                    else{
                        errorAlert("Meter Type Cant be Empty")
                    }
                }
                else{
                    errorAlert("Meter Number cant be Empty")
                }
            }
            else{
                errorAlert("Email Address Cant be Empty")
            }
        }
        else{
            errorAlert("Token Amount Cant be Empty")
        }
    }

  return (
    <div className='btf'>
        <Form>
            <Form.Group className="mb-3 form-group"> 
                <div className='mb-2'>
                    <Form.Label>Meter Number</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="0000-0000-0000" 
                        id="meterNo"
                        name="meterNo"
                        value={tokenObject.meterNo}
                        onChange={handleChange}
                        />
                </div>
                <span className="add-new-form-btn" onClick={handleClear}>
                    <span className="iconify" data-icon="bi:plus"></span>
                    <span>Clear Meter</span>
                </span>
            </Form.Group>

            <Form.Group className="mb-3 mt-5 form-group">
                <Form.Label>Select State</Form.Label>
                <Select
                    value={state}
                    name="stateID"
                    options={stateDiscos}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select State..."
                    isLoading={isStateDiscosLoading}
                    menuColor='red'
                    onChange={(e) => handleStateSelect(e)}
                    formatOptionLabel={state => (
                    <div className="state-option">
                        {state.discoLogo === "" ?
                        <img src='./assets/images/phedc.svg' alt={state.discoCode} />
                        :
                        <img src={state.discoLogo} alt={state.discoCode} />
                        }
                        <span className="label">{state.stateName}</span>
                    </div>

                    )}
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Meter Type</Form.Label>
                <Form.Select 
                    id="meterType"
                    name="meterType"
                    value={tokenObject.meterType}
                    onChange={handleChange}
                >
                    <option disabled>Meter Type</option>
                    <option value="prepaid">Prepaid</option>
                    {/* <option value="postpaid">Postpaid</option> */}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Phone Number" 
                    id="phoneNumber"
                    name="phoneNumber"
                    value={tokenObject.phoneNumber}
                    onChange={handleChange}
                    disabled
                />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email address" 
                    id="emailAddress"
                    name="emailAddress"
                    value={tokenObject.emailAddress}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Label>Amount to recharge meter</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Naira" 
                    id="amount"
                    name="amount"
                    value={tokenObject.amount.toString()}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="form-group">
                <div className='btn-wrapper'>
                    {isStateAvailable ? 
                    <button className='btf-btn'  type="button" onClick={onsubmit} disabled={isSubmitting}>
                        {
                            isSubmitting ?
                            <Spinner animation="border" size="sm" />
                            :
                            "Continue"
                        }
                    </button>
                    :
                    <button className='btf-btn'  type="button" onClick={refetchStateDiscos}>
                       Try Again
                    </button>
                    }
                </div>
            </Form.Group>
        </Form>
    </div>
  )
}

export default BuyTokenForm