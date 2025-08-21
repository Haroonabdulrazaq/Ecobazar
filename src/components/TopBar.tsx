import { HiChevronDown } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import '../assets/stylesheets/TopBar.scss';

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <HiOutlineLocationMarker className='w-4 h-4 text-gray-600' />
          <span className='text-sm text-gray-700'>
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>

        <div className='flex items-center space-x-4'>
          <div className='hidden sm:flex items-center space-x-1 cursor-pointer'>
            <span className='text-sm text-gray-700'>Eng</span>
            <HiChevronDown className='w-3 h-3 text-gray-600' />
          </div>

          <div className='hidden sm:flex items-center space-x-1 cursor-pointer'>
            <span className='text-sm text-gray-700'>USD</span>
            <HiChevronDown className='w-3 h-3 text-gray-600' />
          </div>

          <span className='hidden sm:block text-gray-400'>|</span>

          <div className='flex items-center space-x-2'>
            <span className='text-sm text-gray-700 cursor-pointer hover:text-gray-900'>
              Sign In
            </span>
            <span className='text-sm text-gray-400'>/</span>
            <span className='text-sm text-gray-700 cursor-pointer hover:text-gray-900'>
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
