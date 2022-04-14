import React from 'react';
import { Modal, Table } from 'react-bootstrap';


const RechargeDetailModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
                    <button type='button'>
                        <span className="iconify" data-icon="ph:printer"></span>
                        <span>Print Receipt</span>
                    </button>
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
                        <span>0898-0897-1488-9746-0548</span>
                        <img src="./assets/images/copy.svg" alt="Thumbs up"/>
                    </div>
                </div>
                <div className='rdm-token-summary-container'>
                    <div className='key'>
                        Number of Units:
                    </div>
                    <div className='value'>
                        <span>131</span>
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
                                    <div className='value'>45067114830</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Recharge Date:</div>
                                    <div className='value'>Sun, 20 Mar 2022 20:14:08</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Transaction Reference:</div>
                                    <div className='value'>D2540E77ED748B709D30BE03892BF3E6</div>
                                </div>
                                {
                                    props.isReceiptSuccessful &&
                                    <div className='rdm-tb-content-wrapper'>
                                        <div className='key'>Receipt Number:</div>
                                        <div className='value'>EKEDP3EMB11350562</div>
                                    </div>
                                }
                            </td>
                            <td>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Recharge Amount:</div>
                                    <div className='value'>₦1,100.00</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Service Charge:</div>
                                    <div className='value'>₦100.00</div>
                                </div>
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Discount:</div>
                                    <div className='value'>₦0.00</div>
                                </div>
                                {
                                    props.isReceiptSuccessful &&
                                    <div className='rdm-tb-content-wrapper'>
                                        <div className='key'>Debt:</div>
                                        <div className='value'>₦0.00</div>
                                    </div>
                                }
                                <div className='rdm-tb-content-wrapper'>
                                    <div className='key'>Total Amount:</div>
                                    <div className='value'>₦1,100.00</div>
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
            <div className='rdm-token-detail'>
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
            </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RechargeDetailModal