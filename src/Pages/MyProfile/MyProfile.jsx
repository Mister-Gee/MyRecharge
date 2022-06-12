import React, {useState} from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Frame from '../Components/Frame';
import SideNav from '../Components/SideNav';
import ProfileDetail from './ProfileDetail';
import ProfileEdit from './ProfileEdit';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false)
  return (
    <Frame title="My Profile">
    <div className='wrapper'>
            <div className='side-nav'>
                <SideNav />
            </div>
            <div className='content'>
                <Breadcrumb 
                    icon="user"
                    title="My Profile"
                    isSearch={false}
                />
                <div className='card'>
                    <div className="content-section">
                        <div className='content-details'>
                            <div className='content-header'>
                                <div className='profile-dp'>
                                    <img src="./assets/images/user.svg" alt="user"/>
                                </div>
                                {!isEdit &&
                                    <div className='edit-user' onClick={() => setIsEdit(true)}>
                                        <span className="iconify" data-icon="clarity:note-edit-line"></span>
                                        <span>Edit</span>
                                    </div>
                                }
                            </div>
                            {isEdit ? 
                                <ProfileEdit 
                                    setIsEdit={setIsEdit}
                                />
                                :
                                <ProfileDetail />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Frame>
  )
}

export default MyProfile