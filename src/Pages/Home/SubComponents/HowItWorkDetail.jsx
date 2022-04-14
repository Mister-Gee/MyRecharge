import React from 'react'

const HowItWorkDetail = ({number, icon, title, body}) => {
  return (
    <div className='hiwc-detail'>
        <div className='hiwc-header-container'>
            <div className='hiwc-header-number'>{number}</div>
            <img src={`./assets/images/${icon}.svg`} alt="how it works" />
        </div>
        <div className='hiwc-header'>{title}</div>
        <div className='hiwc-body'>{body}</div>
    </div>
  )
}

export default HowItWorkDetail