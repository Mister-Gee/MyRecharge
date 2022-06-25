import React from 'react'

const TestimonialCard = ({title, body, image, name, position}) => {
  return (
    <div className='testimonial-card'>
        <div className='testimonial-bubble'>
            <div className='testimonial-bubble-header'>{title}</div>
            <div className='testimonial-bubble-body' dangerouslySetInnerHTML={body}>
               {/* {body} */}
            </div>
            <div className='triangle'></div>
        </div>
        <div className='testimonial-user'>
            <div className='testimonial-user-icon'>
                <img src={`./assets/images/${image}`} alt='user'/>
            </div>
            <div className='testimonial-user-detail'>
                <div className='testimonial-user-name'>{name}</div>
                <div className='testimonial-user-position'>{position}</div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard