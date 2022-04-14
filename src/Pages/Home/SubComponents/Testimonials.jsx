import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <div className='testimonial-wrapper'>
        <div className='testimonial-header'>Happy customers</div>
        <div className='quote-icon'>
            <img src='./assets/images/quoteIcon.svg' alt="quote"/>
        </div>
        <div className='testimonial-carousel'>
            <TestimonialSlider />
        </div>
    </div>
  )
}

export default Testimonials