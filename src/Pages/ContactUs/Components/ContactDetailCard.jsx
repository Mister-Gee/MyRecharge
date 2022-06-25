import React from 'react'

const ContactDetailCard = () => {
  return (
    <div className='cdc-container q-card-section'>
        <div className="card cdc-card q-card">
            <div className='cdc-card-detail'>
                <img src='./assets/images/cdc-email.svg' alt='email' />
                <div className='cdc-card-detail-header'>Email Us</div>
                <div className='cdc-card-detail-body'>info@myrecharge.ng</div>
            </div>
            <div className='cdc-card-detail'>
                <img src='./assets/images/cdc-phone.svg' alt='phone' />
                <div className='cdc-card-detail-header'>Call or text us</div>
                <div className='cdc-card-detail-body'>+234 916 854 5835</div>
            </div>
            <div className='cdc-card-detail'>
                <img src='./assets/images/cdc-whatsapp.svg' alt='whatsapp' />
                <div className='cdc-card-detail-header'>Whatsapp number</div>
                <div className='cdc-card-detail-body'>+234 916 854 5835</div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetailCard