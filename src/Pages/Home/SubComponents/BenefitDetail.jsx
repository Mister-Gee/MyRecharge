import React from 'react'

const BenefitDetail = ({icon, title, body}) => {
  return (
    <div className='benefit-c-detail'>
        <img src={`./assets/images/${icon}.svg`} alt="benefit icon"/>
        <div className='benefit-c-header'>{title} </div>
        <div className='benefit-c-body'>{body}</div>
    </div>
  )
}

export default BenefitDetail