import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import {Table} from 'react-bootstrap';

const MyMeters = () => {
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
                    <tr>
                        <td>45067114830</td>
                        <td>P. P</td>
                        <td>EKO</td>
                        <td>47 ABEOKUTA STREET YABA</td>
                        <td>₦9,100.00</td>
                        <td> 
                            <span>
                                <span className="iconify delete" data-icon="ep:delete"></span>
                            </span>
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

export default MyMeters