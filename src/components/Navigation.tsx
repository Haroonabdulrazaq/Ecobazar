import React, { useState } from 'react';
import { FaPhoneVolume, FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6';
import '../assets/stylesheets/Navigation.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='navigation'>
      <div className='navigation__container global-padding global-y-padding'>
        <div className='navigation__menu'>
          <div className='navigation__item'>
            <span>Home</span>
            <FaChevronDown className='navigation__caret' />
          </div>
          <div className='navigation__item'>
            <span>Shop</span>
            <FaChevronDown className='navigation__caret' />
          </div>
          <div className='navigation__item'>
            <span>Pages</span>
            <FaChevronDown className='navigation__caret' />
          </div>
          <div className='navigation__item'>
            <span>Blog</span>
            <FaChevronDown className='navigation__caret' />
          </div>
          <div className='navigation__item'>
            <span>About Us</span>
          </div>
          <div className='navigation__item'>
            <span>Contact Us</span>
          </div>
        </div>

        <div className='navigation__contact'>
          <FaPhoneVolume className='navigation__phone-icon' />
          <span className='navigation__phone-text'>(219) 555-0114</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className='navigation__hamburger'
          onClick={openMenu}
          aria-label='Toggle navigation menu'
        >
          {<FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navigation__mobile-menu ${isMenuOpen ? 'navigation__mobile-menu--open' : ''}`}
      >
        <div className='navigation__mobile-menu-content'>
          <button
            className='navigation__close-button'
            onClick={closeMenu}
            aria-label='Toggle navigation menu'
          >
            {<FaXmark />}
          </button>
          <div className='navigation__mobile-item'>
            <span>Home</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div className='navigation__mobile-item'>
            <span>Shop</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div className='navigation__mobile-item'>
            <span>Pages</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div className='navigation__mobile-item'>
            <span>Blog</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div className='navigation__mobile-item'>
            <span>About Us</span>
          </div>
          <div className='navigation__mobile-item'>
            <span>Contact Us</span>
          </div>

          <div className='navigation__mobile-contact'>
            <FaPhoneVolume className='navigation__mobile-phone-icon' />
            <span className='navigation__mobile-phone-text'>
              (219) 555-0114
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
