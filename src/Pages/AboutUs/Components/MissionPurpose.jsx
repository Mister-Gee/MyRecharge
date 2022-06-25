const MissionPurpose = () => {
  return (
    <div className='mp-container'>
        <div className='mp-mission'>
            <div className='mp-mission-header'>Our Mission</div>
            <div className='mp-mission-body'>
                <p>The aim of MyRecharge platform is to allow users to pay for electricity bills online, at the comfort of their fingertips using whatever device of their choosing while decongesting payment centers and enhancing the convenience of the user either from their homes, offices etc.</p>
                <p>MyRecharge understands the value of time in today's world and wants to minimize time spent in obtaining and paying for power by enhancing the process of paying for utilities and has incorporated tools and features to help you conserve and monitor your power usage.</p>
                <p>We go all out to ensure we deliver good service to our customers who depend on our platform for ease of payment. We go the distance to minimize service downtime so that our service is minimally interrupted thus ensuring your access to the platform is also uninterrupted.</p>
            </div>
        </div>
        <div className='mp-purpose'>
            <div className='mp-purpose-header'>Our Purpose</div>
            <div className='mp-purpose-body-wrapper'>
                <div className='mp-purpose-body-content'>
                    <img src="./assets/images/check.svg" alt="check"/>
                    <span>We work with electricity providers to give ownership to the users and consumers of power.</span>
                </div>
                <div className='mp-purpose-body-content'>
                    <img src="./assets/images/check.svg" alt="check"/>
                    <span>Making decision of reducing power usage, rate of usage, payment at the customers convenience.</span>
                </div>
                <div className='mp-purpose-body-content'>
                    <img src="./assets/images/check.svg" alt="check"/>
                    <span>All this gives ownership and control to the user.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionPurpose