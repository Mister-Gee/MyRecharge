import React, {useState} from 'react';
import { monetizeAmount } from '../../../utilities/functions';
import { recharge_discount } from '../../../Services/rechargeService';
import { Spinner } from 'react-bootstrap';
import {usePaystackPayment} from 'react-paystack';


const Summary = ({handleNext, tokenObject, setTokenObject, stateDiscos, pubKey}) => {
    const [serviceCharge, setServiceCharge] = useState(0)
    const [discount, setDiscount] = useState(0)

    const [isCodeApplying, setIsCodeApplying] = useState(false)


    const handleChange = e => {
        const { value } = e.target;
        setTokenObject(prevState => ({
            ...prevState,
            discountCode:  value
        }));
    };

    const applyDiscount = async() => {
        try{
            if(tokenObject.discountCode !== ""){
                setIsCodeApplying(true)
                const discountDTO = {
                    "amount": tokenObject.amount,
                    "discountCode": tokenObject.discountCode
                }
                const res = await recharge_discount(discountDTO)
                if(res.status === 200){
                    setServiceCharge(res.data.response.serviceCharge)
                    setDiscount(res.data.response.discount)
                    setTokenObject(prevState => ({
                        ...prevState,
                        amount:  res.data.response.rechargeAmount
                    }));

                }
                setIsCodeApplying(false)
            }
        }
        catch(err){
            console.log(err) 
            setIsCodeApplying(false)
        }
    }

    let stateDisco = stateDiscos.find(x => x.stateID === tokenObject.stateId)

    const config = {
        reference: (new Date()).getTime().toString(),
        email: tokenObject.emailAddress,
        amount: tokenObject.amount * 100,
        publicKey: pubKey,
    };

    const onPaymentSuccess = (reference) => {
        setTokenObject(prevState => ({
            ...prevState,
            transactionRef: reference.reference
        }));
        handleNext(3)
    };
    
    const onPaymentClose = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);

  return (
    <div className='summary-section'>
        <div className='summary-detail-header'>REVIEW RECHARGE SUMMARY</div>
        <div className='summary-detail-body'>
            <div className='summary-detail-pair'>
                <div className='title'>Meter Number:</div>
                <div className='key'><b>{tokenObject.meterNo}</b></div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Selected State</div>
                <div className='key'>
                    {stateDisco.discoLogo === "" ?
                        <img src='./assets/images/phedc.svg' alt={stateDisco.discoCode}/>
                        :
                        <img src={stateDisco.discoLogo} alt={stateDisco.discoCode}/>
                    }
                    <span>{stateDisco.stateName}</span>
                </div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Meter Type:</div>
                <div className='key'>{tokenObject.meterType}</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Meter Name:</div>
                <div className='key'>{tokenObject.customerName === "" ? "-" : tokenObject.customerName}</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Address:</div>
                <div className='key'>-</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Phone Number:</div>
                <div className='key'>{tokenObject.phoneNumber}</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Email Address:</div>
                <div className='key'>{tokenObject.emailAddress}</div>
            </div>
        </div>
        <div className="coupon-header">Have a Discount Code? please apply it below.</div>
        <div className='coupon-form'>
            <input 
                type="text" 
                placeholder="Discount Code"
                id="discountCode"
                name="discountCode"
                value={tokenObject.discountCode}
                onChange={handleChange}
            />
            <button type='button' onClick={applyDiscount} disabled={isCodeApplying}>
                {isCodeApplying ?
                    <Spinner animation="border" size="sm" />
                    :
                    "Apply Code"
                }
            </button>
        </div>
        <div className='payment-summary'>PAYMENT SUMMARY</div>
        <div className='summary-detail-body'>
            <div className='summary-detail-pair'>
                <div className='title'>Recharge Amount:</div>
                <div className='key'>NGN {monetizeAmount(tokenObject.amount)}</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Service Charge:</div>
                <div className='key'>NGN {monetizeAmount(serviceCharge)}</div>
            </div>
            <div className='summary-detail-pair'>
                <div className='title'>Discount:</div>
                <div className='key'>NGN {monetizeAmount(discount)}</div>
            </div>
        </div>
        <div className='summary-btn'>
            <button className='btf-btn'  type="button" onClick={() => initializePayment(onPaymentSuccess, onPaymentClose)}>
                Payment NGN {monetizeAmount(tokenObject.amount)}
            </button>
            <span className='edit-summary-btn' onClick={() => handleNext(1)}>
                <img src="./assets/images/edit.svg" alt="edit"/>
                <span>Edit your recharge summary</span>
            </span>
        </div>
    </div>
  )
}

export default Summary