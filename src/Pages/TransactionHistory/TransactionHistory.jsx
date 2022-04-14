import React, {useState} from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import {Table} from 'react-bootstrap';
import RechargeDetailModal from './SubComponents/RechargeDetailModal';

const TransactionHistory = () => {
    const [modalShow, setModalShow] = useState(false)
    const [isReceiptSuccessful, setIsReceiptSuccessful] = useState(false)


    const handleShow = (isSuccess) => {
        setIsReceiptSuccessful(isSuccess)
        setModalShow(true)
    }

  return (
    <Frame title="Transactions">
    <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
                <RechargeDetailModal 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    isReceiptSuccessful={isReceiptSuccessful}
                />
                <Breadcrumb 
                    icon="credit-card"
                    title="Transactions"
                    isSearch={true}
                    searchPlaceholder="Search transactions"
                />
                <div className='table-container'>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Meter Number</th>
                        <th>Amount</th>
                        <th>Number of Units</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>20/03/2022 <br/> 21:14:08PM</td>
                        <td>45067114830 ∙ EKO</td>
                        <td>₦9,100.00</td>
                        <td>131</td>
                        <td>Successful</td>
                        <td>
                            <button type='button' onClick={() => handleShow(true)}>
                                Recharge Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>20/03/2022 <br/> 21:14:08PM</td>
                        <td>45067114830 ∙ EKO</td>
                        <td>₦9,100.00</td>
                        <td>131</td>
                        <td className='failed'>Failed</td>
                        <td>
                            <button type='button' onClick={() => handleShow(false)}>
                                Recharge Details
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    </Frame>
  )
}

export default TransactionHistory