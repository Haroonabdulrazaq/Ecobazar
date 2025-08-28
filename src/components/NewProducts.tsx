import { featuredProducts } from '../common/data';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';
import { PiHandbagThin } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';

import '../assets/stylesheets/new-products.scss';

const NewProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<{
    productId: number;
    type: string;
  } | null>(null);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`star-icon ${i <= rating ? 'filled' : 'empty'}`}
        />
      );
    }
    return stars;
  };

  const handleIconClick = (productId: number, type: string) => {
    setShowTooltip({ productId, type });
    setTimeout(() => setShowTooltip(null), 2000);
  };

  return (
    <div className='new-products global-padding'>
      <div className='new-products__container'>
        <div className='new-products__header'>
          <div className='new-products__header-left'>
            <h2 className='new-products__header-title'>New Products</h2>
            <div className='new-products__underline'>
              <span className='h-1 w-3 bg-green-300 rounded'></span>
              <span className='h-1 w-8 bg-green-500 rounded'></span>
              <span className='h-1 w-3 bg-green-300 rounded'></span>
            </div>
          </div>
          <div className='new-products__header-right'>
            <button>View All →</button>
          </div>
        </div>
        <div className='new-products__grid'>
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className='product-card__image'>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  aria-label={product.name}
                />

                {hoveredProduct === product.id && (
                  <div className='product-card__image-actions'>
                    <button
                      className='product-card__action-btn'
                      onClick={() => handleIconClick(product.id, 'eye')}
                    >
                      <IoEyeOutline size={20} />
                    </button>
                    <button
                      className='product-card__action-btn'
                      onClick={() => handleIconClick(product.id, 'heart')}
                    >
                      <GoHeart size={20} />
                    </button>
                  </div>
                )}
              </div>

              <div className='product-card__content'>
                <div className='product-card__info'>
                  <h3 className='product-card__title'>{product.name}</h3>
                  <div className='product-card__price-rating'>
                    <span className='product-card__price'>
                      ${product.price}
                    </span>
                    <div className='product-card__stars'>
                      {renderStars(product.rating)}
                    </div>
                  </div>
                </div>

                <div className='product-card__actions'>
                  <button
                    className='product-card__cart-btn'
                    onClick={() => handleIconClick(product.id, 'cart')}
                  >
                    <PiHandbagThin size={20} />
                  </button>
                </div>
              </div>

              {showTooltip && showTooltip.productId === product.id && (
                <div className='tooltip'>Coming Soon!</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
