import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTruckFast } from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';
import { IoBagCheckOutline } from 'react-icons/io5';
import { PiPackageLight } from 'react-icons/pi';
import { IPerk } from '../common/interface';
import { slides } from '../common/data';

import '../assets/stylesheets/Carousel.scss';
import { useNavigate } from 'react-router-dom';

const Perks = () => {
  const perks: IPerk[] = [
    {
      id: 1,
      title: 'Free Shipping',
      subtitle: 'Free shipping on all your order',
      Icon: <FaTruckFast />,
    },
    {
      id: 2,
      title: 'Customer Support 24/7',
      subtitle: 'Instant access to support',
      Icon: <BiSupport />,
    },
    {
      id: 3,
      title: 'Secure Payment',
      subtitle: 'We ensure your money is safe',
      Icon: <IoBagCheckOutline />,
    },
    {
      id: 4,
      title: 'Money-Back Guarantee',
      subtitle: '30 days money-back guarantee',
      Icon: <PiPackageLight />,
    },
  ];

  return (
    <div className='perks'>
      <div className='perks__container global-padding'>
        {perks.map(perk => (
          <div key={perk.id} className='perk'>
            <div className='perk__icon'>{perk.Icon}</div>
            <div className='perk__text'>
              <h3>{perk.title}</h3>
              <p>{perk.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='carousel-section'>
      <div className='carousel global-padding'>
        <div className='carousel__container'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel__slide ${
                index === currentSlide ? 'carousel__slide--active' : ''
              }`}
            >
              <div className='carousel__content'>
                <div
                  className={`carousel__text-section ${
                    slide.isReversed ? 'carousel__text-section--reversed' : ''
                  }`}
                >
                  <h2 className='carousel__title'>{slide.title}</h2>
                  <h1 className='carousel__heading'>{slide.heading}</h1>
                  <p className='carousel__sale-text'>
                    Sale up to{' '}
                    <span className='carousel__sale-highlight'>30% OFF</span>
                  </p>
                  <p className='carousel__subtitle'>{slide.subtitle}</p>
                  <button
                    className='carousel__button'
                    onClick={() => navigate('/shop')}
                  >
                    Shop now
                    <FaArrowRight className='carousel__button-icon' />
                  </button>
                </div>
                <div
                  className={`carousel__image-section ${
                    slide.isReversed ? 'carousel__image-section--reversed' : ''
                  }`}
                >
                  <img
                    src={slide.image}
                    alt='Fresh organic food'
                    className='carousel__image'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className='carousel__dots'>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel__dot ${
                index === currentSlide ? 'carousel__dot--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className='carousel__nav carousel__nav--prev'
          onClick={prevSlide}
          aria-label='Previous slide'
        >
          <FaArrowLeft />
        </button>
        <button
          className='carousel__nav carousel__nav--next'
          onClick={nextSlide}
          aria-label='Next slide'
        >
          <FaArrowRight />
        </button>
      </div>

      <Perks />
    </div>
  );
};

export default Carousel;
