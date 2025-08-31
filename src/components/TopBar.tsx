import { HiChevronDown } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import '../assets/stylesheets/TopBar.scss';

const TopBar = () => {
  return (
    <div className='top-bar global-padding'>
      <div className='top-bar__container'>
        <div className='top-bar__location'>
          <HiOutlineLocationMarker className='top-bar__location-icon' />
          <span className='top-bar__location-text'>
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>

        <div className='top-bar__controls'>
          <div className='top-bar__dropdown'>
            <span className='top-bar__dropdown-text'>Eng</span>
            <HiChevronDown className='top-bar__dropdown-icon' />
          </div>

          <div className='top-bar__dropdown'>
            <span className='top-bar__dropdown-text'>USD</span>
            <HiChevronDown className='top-bar__dropdown-icon' />
          </div>

          <span className='top-bar__divider'>|</span>

          <div className='top-bar__auth'>
            <span className='top-bar__auth-link'>Sign In</span>
            <span className='top-bar__auth-separator'>/</span>
            <span className='top-bar__auth-link'>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
