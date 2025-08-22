import React from 'react';
import { GoSearch, GoHeart } from 'react-icons/go';
import { PiHandbagThin } from 'react-icons/pi';
import plantLogo from '../assets/images/plant-logo.png';
import '../assets/stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container global-padding'>
        <div className='header__logo'>
          <img
            src={plantLogo}
            alt='Ecobazar Logo'
            className='header__logo-image'
          />
          <span className='header__logo-text'>Ecobazar</span>
        </div>

        <div className='flex w-full max-w-md'>
          <div className='relative flex-1'>
            <GoSearch
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={13}
            />
            <input
              type='text'
              placeholder='Search'
              className='w-full rounded-l-md border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-100 focus:border-green-500'
            />
          </div>

          <button className='bg-green-500 text-white px-5 py-2 rounded-r-md hover:bg-green-600 transition'>
            Search
          </button>
        </div>

        <div className='header__cart'>
          <div className='header__cart-wishlist'>
            <GoHeart size={25} />
          </div>
          <span className='header__cart-divider'>|</span>
          <div className='header__cart-item'>
            <PiHandbagThin size={25} />
            <div className='header__cart-icon-container'>
              <span className='header__cart-text'>shopping cart:</span>
              <span className='header__cart-price'>$57.00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
