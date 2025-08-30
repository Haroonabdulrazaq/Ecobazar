import React, { useState, useRef, useEffect } from 'react';
import banner1 from '../assets/images/banner-1.png';
import banner2 from '../assets/images/banner-2.png';
import banner3 from '../assets/images/banner-3.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { topCategoryItems } from '../common/data';

import '../assets/stylesheets/top-category.scss';

const TopCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 2,
    minutes: 18,
    seconds: 46,
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % topCategoryItems.length;
    setCurrentIndex(nextIndex);
    scrollToItem(nextIndex);
  };

  const scrollToPrevious = () => {
    const prevIndex =
      currentIndex === 0 ? topCategoryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToItem(prevIndex);
  };

  const scrollToItem = (index: number) => {
    const item = itemRefs.current[index];
    const container = scrollContainerRef.current;

    if (item && container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const gap = 24;

      const itemPosition = index * (itemWidth + gap);
      const centerPosition = itemPosition - containerWidth / 2 + itemWidth / 2;

      const scrollLeft = Math.max(0, centerPosition);

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
    scrollToItem(index);
  };

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='top-category global-padding'>
      <div className='top-category__container'>
        <div className='top-category__header'>
          <h2 className='top-category__title'>Top Category</h2>
          <div className='top-category__underline'>
            <span className='h-1 w-3 bg-green-300 rounded'></span>
            <span className='h-1 w-8 bg-green-500 rounded'></span>
            <span className='h-1 w-3 bg-green-300 rounded'></span>
          </div>
        </div>

        <div className='top-category__scroll-container'>
          <button
            className='top-category__scroll-btn top-category__scroll-btn--left'
            onClick={scrollToPrevious}
            aria-label='Scroll to previous item'
          >
            <FaArrowLeft />
          </button>

          <div className='top-category__grid' ref={scrollContainerRef}>
            {topCategoryItems.map((item, index) => (
              <div
                className={`top-category__item ${currentIndex === index ? 'active' : ''}`}
                key={item.id}
                ref={el => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  aria-label={item.name}
                  title={item.name}
                  className='top-category__item-image'
                />
                <h3 className='top-category__item-name'>{item.name}</h3>
                <p className='top-category__item-count'>
                  {item.count} Products
                </p>
              </div>
            ))}
          </div>

          <button
            className='top-category__scroll-btn top-category__scroll-btn--right'
            onClick={scrollToNext}
            aria-label='Scroll to next item'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className='top-banner-container'>
        <div className='top-banner-container__first-banner'>
          <div className='banner-image-container'>
            <img
              src={banner1}
              alt='Best Deals Banner'
              aria-label='Best Deals Banner'
            />
            <div className='banner-overlay'>
              <h3 className='banner-title'>BEST DEALS</h3>
              <div className='countdown-timer'>
                <div className='countdown-item'>
                  <span className='countdown-number'>
                    {countdown.days.toString().padStart(2, '0')}
                  </span>
                  <span className='countdown-label'>Days</span>
                </div>
                <span className='countdown-separator'>:</span>
                <div className='countdown-item'>
                  <span className='countdown-number'>
                    {countdown.hours.toString().padStart(2, '0')}
                  </span>
                  <span className='countdown-label'>Hours</span>
                </div>
                <span className='countdown-separator'>:</span>
                <div className='countdown-item'>
                  <span className='countdown-number'>
                    {countdown.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className='countdown-label'>Minutes</span>
                </div>
                <span className='countdown-separator'>:</span>
                <div className='countdown-item'>
                  <span className='countdown-number'>
                    {countdown.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className='countdown-label'>Seconds</span>
                </div>
              </div>
              <button className='banner-button'>Shop now →</button>
            </div>
          </div>
        </div>

        <div className='top-banner-container__second-banner'>
          <div className='banner-image-container'>
            <img
              src={banner2}
              alt='Low-Fat Meat Banner'
              aria-label='Low-Fat Meat Banner'
            />
            <div className='banner-overlay'>
              <h3 className='banner-subtitle'>85% FAT FREE</h3>
              <h2 className='banner-main-title'>Low-Fat Meat</h2>
              <p className='banner-price'>Started at $79.99</p>
              <button className='banner-button'>Shop now →</button>
            </div>
          </div>
        </div>

        <div className='top-banner-container__third-banner'>
          <div className='banner-image-container'>
            <img
              src={banner3}
              alt='Summer Sale Banner'
              aria-label='Summer Sale Banner'
            />
            <div className='banner-overlay'>
              <h3 className='banner-subtitle banner-subtitle--dark'>
                SUMMER SALE
              </h3>
              <h2 className='banner-main-title banner-main-title--dark'>
                100% Fresh Fruit
              </h2>
              <p className='banner-discount'>upto 64% OFF</p>
              <button className='banner-button'>Shop now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
