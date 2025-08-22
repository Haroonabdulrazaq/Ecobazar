import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import VegetableBasket1 from '../assets/images/vegetable-basket-1.png';
import VegetableBasket2 from '../assets/images/vegetable-basket-2.png';
import VegetableBasket3 from '../assets/images/vegetable-basket-3.png';
import '../assets/stylesheets/Carousel.scss';

interface Slide {
  id: number;
  title: string;
  heading: string;
  saleText: string;
  subtitle: string;
  image: string;
  isReversed: boolean;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Welcome to Shopery',
      heading: 'Fresh & Healthy Organic Food',
      saleText: 'Sale up to 30% OFF',
      subtitle: 'Free shipping on all your order. we deliver, you enjoy',
      image: VegetableBasket1,
      isReversed: false,
    },
    {
      id: 2,
      title: 'Welcome to Shopery',
      heading: 'Fresh & Healthy Organic Food',
      saleText: 'Sale up to 30% OFF',
      subtitle: 'Free shipping on all your order. we deliver, you enjoy',
      image: VegetableBasket2,
      isReversed: true,
    },
    {
      id: 3,
      title: 'Welcome to Shopery',
      heading: 'Fresh & Healthy Organic Food',
      saleText: 'Sale up to 30% OFF',
      subtitle: 'Free shipping on all your order. we deliver, you enjoy',
      image: VegetableBasket3,
      isReversed: false,
    },
  ];

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
                <button className='carousel__button'>
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
  );
};

export default Carousel;
