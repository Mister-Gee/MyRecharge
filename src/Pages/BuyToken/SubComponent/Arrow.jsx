import React from 'react';

const Arrow = ({content, isActive, step, isCompleted}) => {
  return (
    <div className='outer-arrow'>
      <div className='inner-arrow'>
          <div className='arrow-content-wrapper'>
            <div className='arrow-step-wrapper'>
              {isCompleted ? 
              <span className="iconify" data-icon="bi:check-circle-fill"></span>
              :
              <div className={isActive ? 'arrow-step active' : 'arrow-step'}>{step}</div>
              }
            </div>
            <div className={isActive ? 'arrow-content active' : isCompleted ? 'arrow-content completed' : 'arrow-content'}>
                {content}
            </div>
          </div>
      </div>
    </div>
    // {/* <div className={isActive ? "arrow arrow-active" : "arrow"}>
    //     {content}
    // </div> */}
    // <div className='arrow-container'>
    //   <img src={isActive ? './assets/images/arrow-active.svg' : './assets/images/arrow.svg'} alt="arrow" />
    //   <span className={isActive ? "arrow-text-active arrow-text" : "arrow-text"}>{content}</span>
    // </div>
  )
}

export default Arrow