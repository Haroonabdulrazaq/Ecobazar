import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { testimonialData } from '../common/data';
import { RiDoubleQuotesR } from 'react-icons/ri';

import '../assets/stylesheets/testimonial.scss';

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => {
      if (isMobile) {
        // Mobile: move to next single testimonial
        return prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1;
      } else {
        // Tablet+: move to next group of 3 testimonials
        const maxIndex = testimonialData.length - 3;
        return prevIndex >= maxIndex ? 0 : prevIndex + 3;
      }
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => {
      if (isMobile) {
        // Mobile: move to previous single testimonial
        return prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1;
      } else {
        // Tablet+: move to previous group of 3 testimonials
        return prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 3;
      }
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`star-icon ${i <= rating ? 'filled' : 'empty'}`}
        />
      );
    }
    return stars;
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <div className='testimonial'>
      <div className='testimonial__container'>
        <div className='testimonial__header'>
          <div className='testimonial__header-left'>
            <h2 className='testimonial__header-title'>Client Testimonial</h2>
            <div className='testimonial__underline'>
              <span className='h-1 w-3 bg-green-300 rounded'></span>
              <span className='h-1 w-8 bg-green-500 rounded'></span>
              <span className='h-1 w-3 bg-green-300 rounded'></span>
            </div>
          </div>

          <div className='testimonial__header-right'>
            <button
              className='testimonial__nav-btn'
              onClick={prevTestimonial}
              aria-label='Previous testimonial'
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className='testimonial__nav-btn'
              onClick={nextTestimonial}
              aria-label='Next testimonial'
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className='testimonial__content'>
          {testimonialData
            .slice(currentIndex, isMobile ? currentIndex + 1 : currentIndex + 3)
            .map((testimonial, index) => (
              <div key={testimonial.id} className='testimonial__card'>
                <div className='testimonial__quote-icon'>
                  <RiDoubleQuotesR size={24} />
                </div>
                <div className='testimonial__card-body'>
                  <blockquote className='testimonial__comment'>
                    "{testimonial.comment}"
                  </blockquote>
                </div>
                <div className='testimonial__card-header'>
                  <div className='testimonial__card-header-left'>
                    <div className='testimonial__avatar'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='testimonial__avatar-img'
                      />
                    </div>
                    <div className='testimonial__info'>
                      <h3 className='testimonial__name'>{testimonial.name}</h3>
                      <p className='testimonial__role'>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className='testimonial__stars'>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className='testimonial__indicators'>
          {Array.from({ length: testimonialData.length }).map((_, index) => (
            <button
              key={index}
              className={`testimonial__indicator testimonial__indicator--mobile ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          {Array.from({ length: Math.ceil(testimonialData.length / 3) }).map(
            (_, index) => (
              <button
                key={`group-${index}`}
                className={`testimonial__indicator testimonial__indicator--desktop ${index === Math.floor(currentIndex / 3) ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index * 3)}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
