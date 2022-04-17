import React from 'react';
import useStateManager from '../../utilities/StateManager';

const ProfileDetail = () => {
    const stateManager = useStateManager()
  return (
    <div className='content-body'>
        <div className='content-row'>
            <div className='value-key'>
                <div className='value'>Name</div>
                <div className='key'>{stateManager.user.fullname.get()}</div>
            </div>
        </div>
        <div className='content-row'>
            <div className='value-key'>
                <div className='value'>Mobile Phone Number</div>
                <div className='key'>{stateManager.user.phoneNumber.get()}</div>
            </div>
            <div className='value-key'>
                <div className='value'>Email Address</div>
                <div className='key'>{stateManager.user.emailAddress.get()}</div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetail