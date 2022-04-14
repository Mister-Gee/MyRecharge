import React from 'react';

const Arrow = ({content, isActive}) => {
  return (
    // <div className={isActive ? "arrow arrow-active" : "arrow"}>
    //     {content}
    // </div>
    <div className='arrow-container'>
      <img src={isActive ? './assets/images/arrow-active.svg' : './assets/images/arrow.svg'} alt="arrow" />
      <span className={isActive ? "arrow-text-active arrow-text" : "arrow-text"}>{content}</span>
    </div>
  )
}

export default Arrow