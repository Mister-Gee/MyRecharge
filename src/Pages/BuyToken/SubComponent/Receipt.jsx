import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {handleCopy, monetizeAmount} from '../../../utilities/functions.js';
import useStateManager from '../../../utilities/StateManager.js';
import Pdf from "react-to-pdf";

const Receipt = ({receipt, setSteps, error, showError }) => {
    const ref = React.createRef();
    const stateManager = useStateManager()
    const [isTranxSuccessful, setIsTranxSuccessful] = useState(false)
    useEffect(() => {
        if(showError === true){
            setIsTranxSuccessful(false)
        }
        else{
            setIsTranxSuccessful(true)
        }
    }, [showError])

  return (
    <div className='receipt-section' ref={ref}>
        <div className={isTranxSuccessful ? "receipt-header" : "receipt-header red"}>RECHARGE {isTranxSuccessful ? "SUCCESSFUL" : "FAILED" }</div>
        {isTranxSuccessful ?
        <div className='receipt-subheader'>My Recharge Summary</div>
        :
        <div className='receipt-subheader red'>{error}</div>
        }
        { isTranxSuccessful &&
            <div className='receipt-detail token-detail'>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Token:
                </div>
                <div className='value'>
                    <b>{receipt.token}</b>
                    <img src="./assets/images/copy.svg" alt="copy" onClick={() => handleCopy(receipt.token)}/>
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Number of Units:
                </div>
                <div className='value nou'>
                    <b>{receipt.energyUnits}</b>
                </div>
            </div>
        </div>
        }
        { isTranxSuccessful &&
        <div className='receipt-detail meter-detail'>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Meter Number:
                </div>
                <div className='value'>
                {receipt.meterNo}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Recharge Date:
                </div>
                <div className='value'>
                {receipt.paymentDateTime}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Transaction Reference:
                </div>
                <div className='value'>
                {receipt.transactionReference}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Receipt Number:
                </div>
                <div className='value'>
                {receipt.receiptNo}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Recharge Amount:
                </div>
                <div className='value'>
                    ₦{monetizeAmount(receipt.amount)}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Service Charge:
                </div>
                <div className='value'>
                    ₦{monetizeAmount(receipt.charges)}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Discount:
                </div>
                <div className='value'>
                    ₦{monetizeAmount(receipt.discount)}
                </div>
            </div>
            {/* <div className='receipt-detail-body'>
                <div className='title'>
                    Debt:
                </div>
                <div className='value'>
                    ₦0.00
                </div>
            </div> */}
            <div className='receipt-detail-body'>
                <div className='title'>
                    Payment Type
                </div>
                <div className='value'>
                    {receipt.paymentType}
                </div>
            </div>
        </div>
        }
        <div className='receipt-detail meter-detail'>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Meter Name:
                </div>
                <div className='value'>
                {stateManager.meterName.get()}
                </div>
            </div>
            <div className='receipt-detail-body'>
                <div className='title'>
                    Address:
                </div>
                <div className='value'>
                {stateManager.meterAddress.get()}
                </div>
            </div>
        </div>
        <div className='receipt-btn'>
            <Pdf targetRef={ref} filename="receipt.pdf">
                {({toPdf}) => (
                    <button className='btf-btn mb-4' onClick={toPdf}  type="button">
                        {/* <img src="./assets/images/printer.svg" alt="print" className='print-icon'/> */}
                        <span className="iconify" data-icon="ph:printer"></span>
                        <span>Print Receipt</span>
                    </button>
                )}
            </Pdf>
            <span className='buy-more-btn'>
                Want more token? Click here to <Link to="/buy-token" onClick={() => setSteps(1)}>purchase token</Link>
            </span>
        </div>
    </div>
  )
}

export default Receipt