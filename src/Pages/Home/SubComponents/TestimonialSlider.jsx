import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='testimonial-c-carousel'>
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            containerClass="testimonial-c-carousel-container"
        >
            <TestimonialCard 
                title=""
                body={{__html: "It is easy and reliable,literally I don't bother when my power goes off if it is weekends or not. <br /> <br/> The seamless purchase of power plus the receipt that I am able to generate at my place of work for proper documentation..."}}
                image="emoji1.svg"
                name="Glory"
                position="Cross River"
            />
            <TestimonialCard 
                title=""
                body={{__html: "Oh how nice! The thing I like the most about myrecharge.ng is the speed with which the transactions are performed online.. <br /> <br />Another thing worthy of note is their user friendly site and the customer care attention they provide us second to none.. I recommend myrecharge.ng!!"}}
                image="emoji2.svg"
                name="Ubong"
                position="Akwa Ibom"
            />
        </Carousel>
    </div>
  )
}

export default TestimonialSlider