import React from 'react';
import { GoSearch, GoHeart } from 'react-icons/go';
import { PiHandbagThin } from 'react-icons/pi';
import plantLogo from '../assets/images/plant-logo.png';
import '../assets/stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
        <div className='logo-section'>
          <img src={plantLogo} alt='Ecobazar Logo' className='logo-image' />
          <span className='brand-text'>Ecobazar</span>
        </div>
        <div className='flex w-full max-w-md md:flex-1'>
          <div className='relative flex-1'>
            <GoSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
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

        <div className='cart-section'>
          <div className='wishlist-item'>
            <GoHeart size={25} />
          </div>
          <span className='divider'>|</span>
          <div className='cart-item'>
            <PiHandbagThin size={25} />
            <div className='cart-icon-container'>
              <span className='text-xs'>shopping cart:</span>
              <span className='text-sm cart-price'>$57.00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
