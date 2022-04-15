import React, {useState, useEffect} from 'react';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import Arrow from './SubComponent/Arrow';
import BuyTokenForm from './SubComponent/BuyTokenForm';
import PaymentProcessingModal from './SubComponent/PaymentProcessingModal';
import Summary from './SubComponent/Summary';
import Receipt from './SubComponent/Receipt';
import {get_payment_gateway_keys, get_states_discos} from '../../Services/rechargeService.js';
// import { serviceError } from '../../utilities/functions';


const BuyToken = () => {
    const [steps, setSteps] = useState(1)
    const [pubKey, setPubKey] = useState("")
    const [stateDiscos, setStateDiscos] = useState([])
    const [isStateDiscosLoading, setIsStateDiscosLoading] = useState(false)
    const [serviceCharge, setServiceCharge] = useState(0)
    const [error, setError] = useState("")

    const [responseObj, setResponseObj] = useState({})
    const [isTranxSuccessful, setIsTranxSuccessful] = useState(false)

    // Form State
    const [tokenObject, setTokenObject] = useState({
        "meterNo": "",
        "meterType": "prepaid",
        "phoneNumber": "",
        "emailAddress": "",
        "customerName": "",
        "amount": 100,
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
        else{
            setModalShow(false)
            setSteps(val)
        }
    }

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
                var res = await get_states_discos()
                setStateDiscos(res.data.response)
                setIsStateDiscosLoading(false)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    },[])
  return (
    <Frame title="Buy Token">
        <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
                <PaymentProcessingModal 
                    show={modalShow}
                    setSteps={handleSummarySteps}
                    setModalShow={setModalShow}
                    tokenObject={tokenObject}
                    steps={steps}
                    setResponseObj={setResponseObj}
                    setIsTranxSuccessful={setIsTranxSuccessful}
                    setError={setError}
                />
                <div className='token-process'>
                    <Arrow 
                        isActive={steps === 1 ? true : false}
                        content="1. Buy Token"
                    />
                    <Arrow 
                        isActive={steps === 2 ? true : false}
                        content="2. Summary"
                    />
                    <Arrow 
                        isActive={steps === 3 ? true : false}
                        content="3. Make Payment"
                    />
                    <Arrow 
                        isActive={steps === 4 ? true : false}
                        content="4. View Receipt"
                    />
                </div>
                <div className='token-form'>
                    {steps === 1 ?
                    <BuyTokenForm 
                        setSteps={setSteps}
                        stateDiscos={stateDiscos}
                        isStateDiscosLoading={isStateDiscosLoading}
                        tokenObject={tokenObject}
                        setTokenObject={setTokenObject}
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
                        defaultVal={tokenObject}
                        isTranxSuccessful={isTranxSuccessful}
                        setSteps={setSteps}
                        error={error}
                    />
                    }
                </div>
            </div>
        </div>
    </Frame>
  )
}

export default BuyToken