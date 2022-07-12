import React from 'react'
import HowItWorkDetail from './HowItWorkDetail'

const HowItWorks = () => {
  return (
    <div className='hiw-wrapper'>
        <div className='hiw-header'>How It Works</div>
        <div className='hiw-details'>
            <HowItWorkDetail 
                number="1"
                icon="enterPhoneNumber"
                title="Add Phone Number"
                body="Select state, enter phone number, email, amount and select next to make payment."
            />
            <HowItWorkDetail 
                number="2"
                icon="enterMeter"
                title="Add Meter Number"
                body="Enter your prepaid meter number you wish to buy token for and select buy token."
            />
            <HowItWorkDetail 
                number="3"
                icon="payment"
                title="Make Payment"
                body="Select payment method you wish to use then follow prompts for payment. "
            />
            <HowItWorkDetail 
                number="4"
                icon="receiveToken"
                title="Get Token"
                body="Once payment is successful, your generated receipt displays the token."
            />
        </div>
    </div>
  )
}

export default HowItWorks