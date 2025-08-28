import { instagramData } from '../common/data';
import igIcons from '../assets/images/ig-icons.png';
import '../assets/stylesheets/instagram.scss';
import { SlSocialInstagram } from 'react-icons/sl';

const Instagram = () => {
  return (
    <div className='ig global-padding'>
      <div className='ig__container'>
        <div className='ig__header'>
          <h3>Follow us on Instagram</h3>
        </div>
        <div className='ig__content'>
          {instagramData.map((item, index) => (
            <div key={index} className='ig__item'>
              <img src={item.image} alt={item.title} aria-label={item.title} />
              <div className='ig__item-overlay'>
                <SlSocialInstagram className='ig__icon' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
