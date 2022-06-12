import React, {useState, useEffect} from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import {Table} from 'react-bootstrap';
import RechargeDetailModal from './SubComponents/RechargeDetailModal';
import ContentLoader from '../Components/ContentLoader';
import { transactions } from '../../Services/rechargeService';
import useStateManager from '../../utilities/StateManager';
import { monetizeAmount } from '../../utilities/functions';


const TransactionHistory = () => {
    const [modalShow, setModalShow] = useState(false)
    const [isReceiptSuccessful, setIsReceiptSuccessful] = useState(false)

    const [transactionList, setTransactionList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [transactionModalDetail, setTransactionModalDetail] = useState({})

    const stateManager = useStateManager()

    const handleTransactionDetails = (status, data) => {
        setIsReceiptSuccessful(status)
        setTransactionModalDetail(data)
        setModalShow(true)
    }

    useEffect(() => {
        const fetch = async() => {
            try{
                const res = await transactions(stateManager.user.userId.get())
                if(res.status === 200){
                    if(res.data.response === null){
                        setTransactionList([])
                    }
                    else{
                        setTransactionList(res.data.response)
                    }
                    setIsLoading(false)
                }
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    }, [])

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
                    detail={transactionModalDetail}
                />
                <Breadcrumb 
                    icon="credit-card-new"
                    title="Transactions"
                    isSearch={true}
                    searchPlaceholder="Search transactions"
                />
                {isLoading ?
                <ContentLoader />
                :
                transactionList.length < 1 ?
                <div className="no-data-found">No Transaction History</div>
                :
                <div className='card'>
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
                            {transactionList.map(data => (
                                <tr key={data.paymentId}>
                                    <td>{data.dateTimeStamp}</td>
                                    <td>{data.meterNumber}</td>
                                    <td>₦{monetizeAmount(data.rechargeAmount)}</td>
                                    <td>{data.numberOfUnits}</td>
                                    <td className={data.status ? "success" : "failed"}><span>{data.status ? "Successful" : "Failed"}</span></td>
                                    <td>
                                        <button type='button' onClick={() => handleTransactionDetails(data.status, data)}>
                                            Recharge Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                }
            </div>
        </div>
    </Frame>
  )
}

export default TransactionHistory