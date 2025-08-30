import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneVolume, FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6';
import '../assets/stylesheets/Navigation.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className='navigation'>
      <div className='navigation__container global-padding global-y-padding'>
        <div className='navigation__menu'>
          <div className='navigation__item'>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <FaChevronDown className='navigation__caret' />
          </div>
          <div className='navigation__item'>
            <span>
              <Link to='/products'>Products</Link>
            </span>
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
        <button
          className='navigation__hamburger'
          onClick={openMenu}
          aria-label='Toggle navigation menu'
        >
          {<FaBars />}
        </button>
      </div>
      <div
        className={`navigation__mobile-menu ${isMenuOpen ? 'navigation__mobile-menu--open' : ''}`}
        onClick={closeMenu}
      >
        <div
          className='navigation__mobile-menu-content'
          ref={mobileMenuRef}
          onClick={e => e.stopPropagation()}
        >
          <button
            className='navigation__close-button'
            onClick={closeMenu}
            aria-label='Close navigation menu'
          >
            {<FaXmark />}
          </button>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/')}
          >
            <span>Home</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/products')}
          >
            <span>
              <Link to='/products'>Products</Link>
            </span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/pages')}
          >
            <span>Pages</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/blog')}
          >
            <span>Blog</span>
            <FaChevronDown className='navigation__mobile-caret' />
          </div>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/about-us')}
          >
            <span>About Us</span>
          </div>
          <div
            className='navigation__mobile-item'
            onClick={() => handleNavigate('/contact-us')}
          >
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
