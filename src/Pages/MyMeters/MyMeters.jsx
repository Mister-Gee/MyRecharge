import React, {useEffect, useState} from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import {Table} from 'react-bootstrap';
import ContentLoader from '../Components/ContentLoader';
import { meters } from '../../Services/rechargeService';
import useStateManager from '../../utilities/StateManager';

const MyMeters = () => {
    const [meterList, setMeterList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const stateManager = useStateManager()


    useEffect(() => {
        const fetch = async() => {
            try{
                const res = await meters(stateManager.user.userId.get())
                if(res.status === 200){
                    if(res.data.response === null){
                        setMeterList([])
                    }
                    else{
                        setMeterList(res.data.response)
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
    <Frame title="My Meters">
    <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
                <Breadcrumb 
                    icon="transaction-history"
                    title="My Meters"
                    isSearch={true}
                    searchPlaceholder="Search transactions"
                />
                {isLoading ?
                <ContentLoader />
                :
                meterList.length < 1 ?
                <div className="no-data-found">No Meter History</div>
                :
                <div className='table-container'>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Meter Number</th>
                            <th>Name</th>
                            <th>Disco</th>
                            <th>Address</th>
                            <th>Last Purchased</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {meterList.map(data => (
                            <tr key={data.meterId}>
                                <td>{data.meterNumber}</td>
                                <td>{data.meterName}</td>
                                <td>{data.meterDisco}</td>
                                <td>{data.meterAddress}</td>
                                <td> {data.lastPurchaseDate}</td>
                                <td> 
                                    <span>
                                        <span className="iconify delete" data-icon="ep:delete"></span>
                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
                }
            </div>
        </div>
    </Frame>
  )
}

export default MyMeters