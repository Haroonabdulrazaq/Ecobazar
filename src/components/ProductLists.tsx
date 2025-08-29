import React, { useState, useMemo } from 'react';
import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { PiHandbagThin } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { allProducts, ProductCategory, PriceRange } from '../common/data';
import { IoHomeOutline } from 'react-icons/io5';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import discountBannar from '../assets/images/discount-bannar.png';
import { CiCircleRemove } from 'react-icons/ci';
import '../assets/stylesheets/product-lists.scss';

const ProductLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number>(10);
  const [showTooltip, setShowTooltip] = useState<{
    productId: number;
    type: string;
  } | null>(null);

  const productsPerPage = selectedNumber;

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Filter by rating
    if (selectedRating) {
      const rating = Number(selectedRating);
      filtered = filtered.filter(product => product.rating >= rating);
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedRating]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedPriceRange, selectedRating]);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedRating('');
  };

  return (
    <div className='product-lists'>
      <div className='product-lists__container'>
        <div className='product-lists__header global-padding'>
          <div className='product-lists__header-home'>
            <Link to='/'>
              <IoHomeOutline />
            </Link>
            <RxCaretRight />
            <Link to='/products'>Products</Link>
          </div>
          <div className='product-lists__header-image'>
            <img
              src={discountBannar}
              alt='discount Bannar'
              aria-label='discount Bannar'
              className='product-lists__header-image-image'
            />
          </div>
        </div>

        <div className='product-lists__filters global-padding'>
          <div className='product-lists__filters-container'>
            <div className='product-lists__filters-group'>
              <select
                className='product-lists__filters-select'
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value=''>Select Category</option>
                {ProductCategory.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='product-lists__filters-group'>
              <select
                className='product-lists__filters-select'
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e.target.value)}
              >
                <option value=''>Select Price</option>
                {PriceRange.map(range => (
                  <option key={range.id} value={range.priceRange}>
                    ${range.priceRange}
                  </option>
                ))}
              </select>
            </div>

            <div className='product-lists__filters-group'>
              <select
                className='product-lists__filters-select'
                value={selectedRating}
                onChange={e => setSelectedRating(e.target.value)}
              >
                <option value=''>Select Rating</option>
                <option value='5'>5 Stars</option>
                <option value='4'>4+ Stars</option>
                <option value='3'>3+ Stars</option>
                <option value='2'>2+ Stars</option>
                <option value='1'>1+ Stars</option>
              </select>
            </div>

            <CiCircleRemove
              onClick={clearFilters}
              size={30}
              className='clear-filters-icon'
            />
          </div>

          <div className='product-lists__filters-group'>
            <select
              className='product-lists__filters-select'
              value={selectedRating}
              onChange={e => setSelectedNumber(Number(e.target.value))}
            >
              <option value=''>Show: {selectedNumber}</option>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </div>
        </div>
        <div className='product-lists__filters-info global-padding'>
          <div className='product-lists__filters-info-left'>
            {(selectedCategory || selectedPriceRange || selectedRating) && (
              <div className='product-lists__active-filters global-padding'>
                <div className='product-lists__active-filters-tags'>
                  {selectedCategory && (
                    <span className='product-lists__active-filter-tag'>
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className='product-lists__active-filter-remove'
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedPriceRange && (
                    <span className='product-lists__active-filter-tag'>
                      Price: ${selectedPriceRange}
                      <button
                        onClick={() => setSelectedPriceRange('')}
                        className='product-lists__active-filter-remove'
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedRating && (
                    <span className='product-lists__active-filter-tag'>
                      Rating: {selectedRating}+ Stars
                      <button
                        onClick={() => setSelectedRating('')}
                        className='product-lists__active-filter-remove'
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          <div>{allProducts.length} results found</div>
        </div>

        <div className='product-lists__grid global-padding'>
          {currentProducts.map(product => (
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

        {totalPages > 1 && (
          <div className='product-lists__pagination'>
            <button
              className='product-lists__pagination-button'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className='product-lists__pagination-info'>
              Page {currentPage} of {totalPages}
            </span>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`product-lists__pagination-button ${
                  page === currentPage ? 'active' : ''
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className='product-lists__pagination-button'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
