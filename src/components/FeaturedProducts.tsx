import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { PiHandbagThin } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import '../assets/stylesheets/featured-products.scss';

import { useState } from 'react';

// Import images
import appleImg from '../assets/images/apple.png';
import chineseCabbageImg from '../assets/images/chinese-cabbage.png';
import greenLettuceImg from '../assets/images/green-lettuce.png';
import greenChillyImg from '../assets/images/green-chilly.png';
import cornImg from '../assets/images/corn.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<{
    productId: number;
    type: string;
  } | null>(null);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      rating: 4.5,
      image: appleImg,
    },
    {
      id: 2,
      name: 'Chinese Cabbage',
      price: 4.99,
      rating: 4.7,
      image: chineseCabbageImg,
    },
    {
      id: 3,
      name: 'Green Lettuce',
      price: 6.99,
      rating: 4,
      image: greenLettuceImg,
    },
    {
      id: 4,
      name: 'Green Chilli',
      price: 4.99,
      rating: 2.5,
      image: greenChillyImg,
    },
    {
      id: 5,
      name: 'Corn',
      price: 3.99,
      rating: 4,
      image: cornImg,
    },
  ];

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
    <div className='featured-products'>
      <div className='featured-products__container'>
        <div className='featured-products__header'>
          <h2 className='featured-products__title '>Featured Products</h2>
          <div className='featured-products__underline'>
            <span className='h-1 w-3 bg-green-300 rounded'></span>
            <span className='h-1 w-8 bg-green-500 rounded'></span>
            <span className='h-1 w-3 bg-green-300 rounded'></span>
          </div>
        </div>

        <div className='featured-products__grid'>
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className='product-card__image'>
                <img src={product.image} alt={product.name} />

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

export default FeaturedProducts;
