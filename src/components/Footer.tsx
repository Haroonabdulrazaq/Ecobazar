import plantLogo from '../assets/images/plant-logo.png';
import '../assets/stylesheets/footer.scss';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import {
  FaApple,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa6';
import visa from '../assets/images/visa.png';
import applePay from '../assets/images/apple-pay.png';
import discover from '../assets/images/discover.png';
import mastercard from '../assets/images/mastercard.png';
import securePay from '../assets/images/secure-payment.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <Top />
        <Bottom />
      </div>
    </div>
  );
};

export default Footer;

const Top = () => {
  return (
    <div className='footer__top global-padding'>
      <div className='footer__top-1'>
        <img
          src={plantLogo}
          alt='Ecobazar Logo'
          className='footer__logo-image'
        />
        <h3 className='footer__logo-text'>Ecobazar</h3>
      </div>
      <div className='footer__top-2'>
        <h2>Suscribe to our Newsletter</h2>
        <p>Get the latest updated news from us.</p>
      </div>
      <div className='footer__top-3'>
        <div className='footer__newsletter-container'>
          <input
            type='email'
            placeholder='Your email address'
            className='footer__newsletter-input'
          />
          <button className='footer__newsletter-button'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className='footer__bottom global-padding'>
      <div className='footer__bottom-top'>
        <div className='footer__bottom-top-about'>
          <h2>About Shopery</h2>
          <p>
            Shopery is a platform that allows you to buy and sell products
            online.
          </p>
          <p className='footer__bottom-top-contact'>
            <span className='footer__bottom-top-contact-phone'>
              (219) 555-0114
            </span>
            <span className='footer__bottom-top-contact-or'> or </span>
            <span className='footer__bottom-top-contact-email'>
              Proxy@gmail.com
            </span>
          </p>

          <p className='footer__bottom-top-contact'></p>
        </div>
        <div className='footer__bottom-top-links'>
          <div className='footer__bottom-top-link footer__bottom-top-link-1'>
            <h2>My Account</h2>
            <ul>
              <li>Order History</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className='footer__bottom-top-link footer__bottom-top-link-2'>
            <h2>Help</h2>
            <ul>
              <li>Contact Account</li>
              <li>FAQ History</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer__bottom-top-link footer__bottom-top-link-3'>
            <h2>Proxy</h2>
            <ul>
              <li>About</li>
              <li>Product</li>
              <li>Products Details Cart</li>
              <li>Track Order</li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom-top-download'>
          <h2>Download our Mobile App</h2>
          <div className='footer__bottom-top-download-container'>
            <div className='footer__bottom-top-download-apple store'>
              <IoLogoGooglePlaystore />
              <div className='footer__bottom-top-download-apple-text'>
                <p>Download on the</p>
                <p>App Store</p>
              </div>
            </div>
            <div className='footer__bottom-top-download-google store'>
              <FaApple />
              <div className='footer__bottom-top-download-google-text'>
                <p>Download on the</p>
                <p>Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__bottom-footer'>
        <div className='footer__bottom-footer-icons'>
          <span className='footer__bottom-footer-icon'>
            <FaFacebook size={24} />
          </span>
          <span className='footer__bottom-footer-icon'>
            <FaTwitter size={24} />
          </span>
          <span className='footer__bottom-footer-icon'>
            <FaInstagram size={24} />
          </span>
          <span className='footer__bottom-footer-icon'>
            <FaLinkedin size={24} />
          </span>
          <span className='footer__bottom-footer-icon'>
            <FaYoutube size={24} />
          </span>
        </div>
        <div className='footer__bottom-footer-copyright'>
          <p>© {new Date().getFullYear()} Ecobazar. All rights reserved.</p>
        </div>
        <div className='footer__bottom-footer-pay'>
          <img src={visa} alt='visa' aria-label='visa' title='visa' />
          <img
            src={mastercard}
            alt='mastercard'
            aria-label='mastercard'
            title='mastercard'
          />
          <img
            src={applePay}
            alt='apple pay'
            aria-label='apple pay'
            title='apple pay'
          />
          <img
            src={discover}
            alt='discover'
            aria-label='discover'
            title='discover'
          />
          <img
            src={securePay}
            alt='secure pay'
            aria-label='secure pay'
            title='secure pay'
          />
        </div>
      </div>
    </div>
  );
};
