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
import EggplantImg from '../assets/images/egg-plant.png';
import OkraImg from '../assets/images/green-okro.png';
import RedTomatoImg from '../assets/images/red-tomatoes.png';
import BigPotatoImg from '../assets/images/big-potatoes.png';
import FreshCauliflowerImg from '../assets/images/fresh-cauliflower.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface Hotdeal {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface BestSeller {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface ITopRated {
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
    {
      id: 5,
      name: 'Green Chilli',
      price: 4.99,
      rating: 2.5,
      image: greenChillyImg,
    },
    {
      id: 6,
      name: 'Corn',
      price: 3.99,
      rating: 4,
      image: cornImg,
    },
  ];

  const hotDeals: Hotdeal[] = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      rating: 4.5,
      image: appleImg,
    },
    {
      id: 2,
      name: 'Indian Malta',
      price: 14.99,
      rating: 4.5,
      image: appleImg,
    },
    {
      id: 3,
      name: 'Green Lettuce',
      price: 6.99,
      rating: 4,
      image: greenLettuceImg,
    },
  ];

  const bestSellersData: BestSeller[] = [
    {
      id: 1,
      name: 'Egg plant',
      price: 14.99,
      rating: 4.5,
      image: EggplantImg,
    },

    {
      id: 2,
      name: 'Green Okro',
      price: 3.99,
      rating: 4.1,
      image: OkraImg,
    },
    {
      id: 3,
      name: 'Red Tomatoes',
      price: 14.99,
      rating: 4.5,
      image: RedTomatoImg,
    },
  ];

  const topRatedData: ITopRated[] = [
    {
      id: 1,
      name: 'Big Potatoes',
      price: 14.99,
      rating: 4.5,
      image: BigPotatoImg,
    },
    {
      id: 2,
      name: 'Fresh Cauliflower',
      price: 14.99,
      rating: 4.5,
      image: FreshCauliflowerImg,
    },
    {
      id: 3,
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
      <div className='featured-products__container  '>
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
      <div className='feature_deals__grid global-padding'>
        <Hotdeals
          products={hotDeals}
          hoveredProduct={hoveredProduct}
          handleIconClick={handleIconClick}
          setHoveredProduct={setHoveredProduct}
          renderStars={renderStars}
        />

        <BestSellers
          products={bestSellersData}
          hoveredProduct={hoveredProduct}
          handleIconClick={handleIconClick}
          setHoveredProduct={setHoveredProduct}
          renderStars={renderStars}
        />

        <TopRated
          products={topRatedData}
          hoveredProduct={hoveredProduct}
          handleIconClick={handleIconClick}
          setHoveredProduct={setHoveredProduct}
          renderStars={renderStars}
        />
        <SummerDeals />
      </div>
    </div>
  );
};

export default FeaturedProducts;

const Hotdeals = ({
  products,
  hoveredProduct,
  handleIconClick,
  setHoveredProduct,
  renderStars,
}: {
  products: Hotdeal[];
  hoveredProduct: number | null;
  handleIconClick: (productId: number, type: string) => void;
  setHoveredProduct: (id: number | null) => void;
  renderStars: (rating: number) => React.ReactElement[];
}) => {
  return (
    <div className='hotdeals'>
      <div className='hotdeals__container'>
        <h2 className='hotdeals__title'>Hot Deals</h2>
        <div className='hotdeals__grid'>
          {products.map(product => (
            <div
              key={product.id}
              className={`hotdeal-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className='hotdeal-card__image'>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  aria-label={product.name}
                />
              </div>

              <div className='hotdeal-card__content'>
                <div className='hotdeal-card__info'>
                  <h3 className='hotdeal-card__title'>{product.name}</h3>
                  <div className='hotdeal-card__price-rating'>
                    <span className='hotdeal-card__price'>
                      ${product.price}
                    </span>
                    <div className='hotdeal-card__stars'>
                      {renderStars(product.rating)}
                    </div>

                    {hoveredProduct === product.id && (
                      <div className='hotdeal-card__actions'>
                        <button
                          className='hotdeal-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'cart')}
                          aria-label='Add to cart'
                        >
                          <PiHandbagThin size={20} />
                        </button>
                        <button
                          className='hotdeal-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'eye')}
                          aria-label='View product'
                        >
                          <IoEyeOutline size={20} />
                        </button>
                        <button
                          className='hotdeal-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'heart')}
                          aria-label='Add to wishlist'
                        >
                          <GoHeart size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BestSellers = ({
  products,
  hoveredProduct,
  handleIconClick,
  setHoveredProduct,
  renderStars,
}: {
  products: BestSeller[];
  hoveredProduct: number | null;
  handleIconClick: (productId: number, type: string) => void;
  setHoveredProduct: (id: number | null) => void;
  renderStars: (rating: number) => React.ReactElement[];
}) => {
  return (
    <div className='bestsellers'>
      <div className='bestsellers__container'>
        <h2 className='bestsellers__title'>Best Sellers</h2>
        <div className='bestsellers__grid'>
          {products.map(product => (
            <div
              key={product.id}
              className={`bestseller-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className='bestseller-card__image'>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  aria-label={product.name}
                />
              </div>

              <div className='bestseller-card__content'>
                <div className='bestseller-card__info'>
                  <h3 className='bestseller-card__title'>{product.name}</h3>
                  <div className='bestseller-card__price-rating'>
                    <span className='bestseller-card__price'>
                      ${product.price}
                    </span>
                    <div className='bestseller-card__stars'>
                      {renderStars(product.rating)}
                    </div>

                    {hoveredProduct === product.id && (
                      <div className='bestseller-card__actions'>
                        <button
                          className='bestseller-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'cart')}
                          aria-label='Add to cart'
                        >
                          <PiHandbagThin size={20} />
                        </button>
                        <button
                          className='bestseller-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'eye')}
                          aria-label='View product'
                        >
                          <IoEyeOutline size={20} />
                        </button>
                        <button
                          className='bestseller-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'heart')}
                          aria-label='Add to wishlist'
                        >
                          <GoHeart size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TopRated = ({
  products,
  hoveredProduct,
  handleIconClick,
  setHoveredProduct,
  renderStars,
}: {
  products: ITopRated[];
  hoveredProduct: number | null;
  handleIconClick: (productId: number, type: string) => void;
  setHoveredProduct: (id: number | null) => void;
  renderStars: (rating: number) => React.ReactElement[];
}) => {
  return (
    <div className='toprated'>
      <div className='toprated__container'>
        <h2 className='toprated__title'>Top Rated</h2>
        <div className='toprated__grid'>
          {products.map(product => (
            <div
              key={product.id}
              className={`toprated-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className='toprated-card__image'>
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  aria-label={product.name}
                />
              </div>

              <div className='toprated-card__content'>
                <div className='toprated-card__info'>
                  <h3 className='toprated-card__title'>{product.name}</h3>
                  <div className='toprated-card__price-rating'>
                    <span className='toprated-card__price'>
                      ${product.price}
                    </span>
                    <div className='toprated-card__stars'>
                      {renderStars(product.rating)}
                    </div>

                    {hoveredProduct === product.id && (
                      <div className='toprated-card__actions'>
                        <button
                          className='toprated-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'cart')}
                          aria-label='Add to cart'
                        >
                          <PiHandbagThin size={20} />
                        </button>
                        <button
                          className='toprated-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'eye')}
                          aria-label='View product'
                        >
                          <IoEyeOutline size={20} />
                        </button>
                        <button
                          className='toprated-card__action-btn'
                          onClick={() => handleIconClick(product.id, 'heart')}
                          aria-label='Add to wishlist'
                        >
                          <GoHeart size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SummerDeals = () => {
  return (
    <div className='summer-deals'>
      <div className='summer-deals__image-container'>
        <img
          src={require('../assets/images/summer-sales.png')}
          alt='Summer Deals'
          aria-label='Summer Deals'
          title='Summer Deals'
        />
        <div className='summer-deals__overlay'>
          <h3 className='summer-deals__title'>SUMMER SALE</h3>
          <p className='summer-deals__discount'>75% off</p>
          <button className='summer-deals__button'>Shop now →</button>
        </div>
      </div>
    </div>
  );
};
