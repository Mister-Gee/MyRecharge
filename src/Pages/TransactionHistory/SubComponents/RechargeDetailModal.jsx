import React from 'react';
import { Modal, Table } from 'react-bootstrap';
import { handleCopy } from '../../../utilities/functions';
import { monetizeAmount } from '../../../utilities/functions';
import Pdf from "react-to-pdf";



const RechargeDetailModal = (props) => {
    const ref = React.createRef();
    const {detail} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      ref={ref}
    >
      <Modal.Body>
        <div className='rdm-wrapper'>
            <div className='rdm-header'>
                {props.isReceiptSuccessful
                ?
                <>
                <div className="rdm-header-title">
                    <img src="./assets/images/thumbs-up.svg" alt="Thumbs up"/>
                    <span className='rdm-header-txt green'>Successful</span>
                </div>
                <div className='rdm-print'>
                    <Pdf targetRef={ref} filename="receipt.pdf">
                        {({toPdf}) => ( 
                            <button type='button' onClick={toPdf}>
                                <span className="iconify" data-icon="ph:printer"></span>
                                <span>Print Receipt</span>
                            </button> 
                        )}
                    </Pdf>
                </div>
                </>
                :
                <>
                <div className="rdm-header-title">
                    <img src="./assets/images/thumbs-down.svg" alt="Thumbs down"/>
                    <span className='rdm-header-txt red'>Transaction failed</span>
                </div>
                <div className='rdm-print'>
                    <button type='button'>
                        <span className="iconify" data-icon="fa6-solid:repeat"></span>
                        <span>Try again</span>
                    </button>
                </div>
                </>
                }
            </div>
            
            {
            props.isReceiptSuccessful &&
            <div className='rdm-token-summary'>
                <div className='rdm-token-summary-container'>
                    <div className='key'>
                        Token:
                    </div>
                    <div className='value'>
                        <span>{detail.token}</span>
                        <img src="./assets/images/copy.svg" alt="Thumbs up" onClick={() => handleCopy(detail.token)}/>
                    </div>
                </div>
                <div className='rdm-token-summary-container'>
                    <div className='key'>
                        Number of Units:
                    </div>
                    <div className='value'>
                        <span>{detail.numberOfUnits}</span>
                    </div>
                </div>
            </div>
            }
            <div className='rdm-token-detail'>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Recharge Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Meter Number:</div>
                                    <div className='value'>{detail.meterNumber}</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Recharge Date:</div>
                                    <div className='value'>{detail.dateTimeStamp}</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Transaction Reference:</div>
                                    <div className='value'>{detail.transactionReference}</div>
                                </div>
                                {
                                    props.isReceiptSuccessful &&
                                    <div className='rdm-tb-content-wrapper'>
                                        <div className='key'>Receipt Number:</div>
                                        <div className='value'>{detail.receiptNumber}</div>
                                    </div>
                                }
                            </td>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Recharge Amount:</div>
                                    <div className='value'>₦{monetizeAmount(detail.rechargeAmount)}</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Service Charge:</div>
                                    <div className='value'>₦{monetizeAmount(detail.serviceCharge)}</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Discount:</div>
                                    <div className='value'>₦{monetizeAmount(detail.discount)}</div>
                                </div>
                                {
                                    props.isReceiptSuccessful &&
                                    <div className='rdm-tb-content-wrapper'>
                                        <div className='key'>Debt:</div>
                                        <div className='value'>₦{monetizeAmount(detail.debt)}</div>
                                    </div>
                                }
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Total Amount:</div>
                                    <div className='value'>₦{monetizeAmount(detail.totalAmount)}</div>
                                </div>
                                <div className='rebuy-btn'>
                                    <button type='button'>
                                        <span className="iconify" data-icon="fa6-solid:repeat"></span>
                                        Re-buy token
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            {/* <div className='rdm-token-detail'>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan={3}>
                                <img src="./assets/images/phedc.svg" alt="phedc"/>
                                <span>Service Provider Response</span>
                            </th>
                        </tr>
                    </thead>
                    {
                        props.isReceiptSuccessful ?
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Recharge Date:</div>
                                    <div className='value'>Sun, 20 Mar 2022 20:14:08</div>
                                </div>
                            </td>
                            <td colSpan={1}>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Receipt Number:</div>
                                    <div className='value'>156580169</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Vend Amount:</div>
                                    <div className='value'>₦1,000.00</div>
                                </div>
                            </td>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Gateway Charge:</div>
                                    <div className='value'>₦100.00</div>
                                </div>
                            </td>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Debt:</div>
                                    <div className='value red'>₦500.00</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Token:</div>
                                    <div className='value'>
                                        <span>0898-0897-1488-9746-0548</span>
                                        <img src="./assets/images/copy.svg" alt="Thumbs up"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Number of Units:</div>
                                    <div className='value'>14.6 kWh</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    :
                    <tbody>
                        <tr>
                            <td colSpan={3} className="no-response red">No response from your service Provider</td>
                        </tr>
                    </tbody>
                    }
                </Table>
            </div> */}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RechargeDetailModal