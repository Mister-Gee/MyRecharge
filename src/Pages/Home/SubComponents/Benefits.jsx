import React from 'react';
import BenefitDetail from './BenefitDetail';

const Benefits = () => {
  return (
    <div className='benefits-wrapper'>
        <div className='benefits-header'>Benefits of using MyRecharge</div>
        <div className='benefits-detail'>
            <BenefitDetail 
                icon="saveTimeIcon"
                title="Saves Time"
                body="You can purchase your meter token instantly and with zero stress."
            />
            <BenefitDetail 
                icon="shieldIcon"
                title="Highly Secured"
                body="Payment is only completed after an OTP (One Time Password) verification."
            />
            <BenefitDetail 
                icon="cloudIcon"
                title="Service Available 24/7"
                body="Our bill payment service is always available. No service downtime with myRecharge."
            />
            <BenefitDetail 
                icon="historyIcon"
                title="View my recharge history"
                body="See all your recharge history and easily re-buy meter token."
            />
            <BenefitDetail 
                icon="supportIcon"
                title="24hours Customer Support"
                body="Our customer care support are always availble to have your issue resolved timely."
            />
            <BenefitDetail 
                icon="refundIcon"
                title="Instant Refunds"
                body="You get an instant refund whenever a failed or incomplete transaction occurs."
            />
        </div>
    </div>
  )
}

export default Benefits