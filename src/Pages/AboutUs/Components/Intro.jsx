import React from 'react'

const Intro = () => {
  return (
    <>
        <div className='intro-container'>
            <div className='intro-header'>ABOUT US</div>
            <div className='intro-body'>We are on a mission to unbundle and regularize utility payments, promoting and encouraging power access to all Nigerians and Africans.</div>
        </div>
        <div className='intro-images'>
            <div className='right-intro'></div>
            <div className='intro-img-container'>
                <img src='./assets/images/about-img.svg' alt='smiling girl'/>
                <img src='./assets/images/phone-sample.svg' alt='My recharge'/>
            </div>
            <div className='left-intro'></div>
            <div className='clear-intro'></div>
        </div>
    </>
  )
}

export default Intro