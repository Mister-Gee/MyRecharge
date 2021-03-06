import React, {useState, useEffect} from 'react';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import Arrow from './SubComponent/Arrow';
import BuyTokenForm from './SubComponent/BuyTokenForm';
import PaymentProcessingModal from './SubComponent/PaymentProcessingModal';
import Summary from './SubComponent/Summary';
import Receipt from './SubComponent/Receipt';
import {get_payment_gateway_keys, get_states_discos} from '../../Services/rechargeService.js';
import jwt_decode from 'jwt-decode';
import ContentLoader from "../Components/ContentLoader";
// import { serviceError } from '../../utilities/functions';


const BuyToken = () => {
    const [steps, setSteps] = useState(1)
    const [pubKey, setPubKey] = useState("")
    const [stateDiscos, setStateDiscos] = useState([])
    const [isStateDiscosLoading, setIsStateDiscosLoading] = useState(true)
    const [stateDiscoTries, setStateDiscoTries] = useState(0)
    const [serviceCharge, setServiceCharge] = useState(0)
    const [error, setError] = useState("")
    const [showError, setShowError] = useState(false)


    const [responseObj, setResponseObj] = useState({})

    // Form State
    const [tokenObject, setTokenObject] = useState({
        "meterNo": "",
        "meterType": "prepaid",
        "phoneNumber": "",
        "emailAddress": "",
        "customerName": "",
        "amount": 0,
        "discountCode": "",
        "stateId": "",
        "transactionRef": "",
        "customerNumber": "",
    })
    
    const [modalShow, setModalShow] = useState(false)

    const handleSummarySteps = (val) => {
        if(val === 3){
            setSteps(val)
            setModalShow(true)
        }
        else if(val === 1){
            setSteps(1)
        }
        else{
            setModalShow(false)
            setSteps(val)
        }
    }

    useEffect(() => {
        var existingEncodedToken = localStorage.getItem("mrep")
        if(existingEncodedToken){
            var existingTokenObject = jwt_decode(existingEncodedToken);
            setTokenObject(existingTokenObject)
        }
    },[])

    useEffect(() => {
        const fetch = async () => {
            try{
                var res = await get_payment_gateway_keys()
                setPubKey(res.data.response.publicKey)
                setServiceCharge(res.data.response.serviceCharge)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    },[])

    useEffect(() => {
        const fetch = async () => {
            try{
                setIsStateDiscosLoading(true)
                var res = await get_states_discos()
                setStateDiscos(res.data.response)
                setIsStateDiscosLoading(false)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    },[stateDiscoTries])

    const refetchStateDiscos = () => {
        setStateDiscoTries((prev) => prev + 1)
    }
  return (
    <Frame title="Buy Token">
        <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
            {isStateDiscosLoading ?
                <ContentLoader />
                :
            <div className="card">
                <PaymentProcessingModal 
                    show={modalShow}
                    setSteps={handleSummarySteps}
                    setModalShow={setModalShow}
                    tokenObject={tokenObject}
                    steps={steps}
                    setResponseObj={setResponseObj}
                    setError={setError}
                    setShowError={setShowError}
                />
                <div className='token-process-wrapper'>
                    <div className='token-process'>
                        <Arrow 
                            isActive={steps === 1 ? true : false}
                            content="Buy Token"
                            step={"01"}
                            isCompleted={steps > 1 ? true : false}
                        />
                        <Arrow 
                            isActive={steps === 2 ? true : false}
                            content="Summary"
                            step={"02"}
                            isCompleted={steps > 2 ? true : false}

                        />
                        <Arrow 
                            isActive={steps === 3 ? true : false}
                            content="Make Payment"
                            step={"03"}
                            isCompleted={steps > 3 ? true : false}
                        />
                        <Arrow 
                            isActive={steps === 4 ? true : false}
                            content="View Receipt"
                            step={"04"}
                            isCompleted={steps > 4 ? true : false}
                        />
                    </div>
                </div>
                <div className='token-form'>
                    {steps === 1 ?
                    <BuyTokenForm 
                        setSteps={setSteps}
                        stateDiscos={stateDiscos}
                        isStateDiscosLoading={isStateDiscosLoading}
                        tokenObject={tokenObject}
                        setTokenObject={setTokenObject}
                        refetchStateDiscos={refetchStateDiscos}
                    />
                    :
                    steps === 2 ?
                    <Summary 
                        handleNext={handleSummarySteps}
                        stateDiscos={stateDiscos}
                        tokenObject={tokenObject}
                        setTokenObject={setTokenObject}
                        pubKey={pubKey}
                        serviceCharge={serviceCharge}
                        setServiceCharge={setServiceCharge}
                    />
                    :
                    steps === 4 &&
                    <Receipt 
                        receipt={responseObj}
                        setSteps={setSteps}
                        error={error}
                        showError={showError}
                    />
                    }
                </div>
                </div>
                }
            </div>
        </div>
    </Frame>
  )
}

export default BuyToken