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
                title="Incredible Experience"
                body=" We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful"
                image="user.png"
                name="Jane Cooper"
                position="CEO, ABC Cooperation"
            />
            <TestimonialCard 
                title="Wonderful Experience"
                body=" We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful"
                image="user.png"
                name="James Bond"
                position="Founder, IJK Cooperation"
            />
            <TestimonialCard 
                title="Splendid Experience"
                body=" We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful"
                image="user.png"
                name="Mary Doe"
                position="MD, STU Cooperation"
            />
            <TestimonialCard 
                title="Incredible Experience"
                body=" We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful"
                image="user.png"
                name="Shang Chi"
                position="CTO, XYZ Cooperation"
            />
        </Carousel>
    </div>
  )
}

export default TestimonialSlider