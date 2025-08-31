import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { addToCart, removeFromCart } from '../state/features/cart/cartSlice';
import '../assets/stylesheets/shopping-cart.scss';
import { IoHomeOutline } from 'react-icons/io5';
import { RxCaretRight } from 'react-icons/rx';
import { CiCircleRemove } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemTotalPrice = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  ).toFixed(2);
  const [couponCode, setCouponCode] = useState('');
  const [processingCoupon, setProcessingCoupon] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleIncrement = (item: any) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleApplyCoupon = () => {
    // For testing purposes, we will use Formik + yup in real scenerio
    setProcessingCoupon(true);
    let regex = /[A-Za-z0-9]{6}/;
    if (couponCode === '' || regex.test(couponCode) === false) {
      setError('Please enter a valid coupon code');
      setProcessingCoupon(false);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(couponCode);
    setError('');
    setProcessingCoupon(false);
    setCouponCode('');
  };

  const handleRemove = (itemId: number) => {
    // Remove all quantities of the item
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      for (let i = 0; i < item.quantity; i++) {
        dispatch(removeFromCart(itemId));
      }
    }
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className='shopping-cart'>
      <div className='shopping-cart__container'>
        <div className='shopping-cart__header'>
          <div className='shopping-cart__header-breadcrumbs global-padding'>
            <Link to='/'>
              <IoHomeOutline />
            </Link>
            <RxCaretRight />
            <Link to='/shopping-cart'>Shopping cart</Link>
          </div>
        </div>
        <div className='shopping-cart-content global-padding'>
          <h2 className='shopping-cart__items-title'>My Shopping Cart</h2>
          <div className='shopping-cart__cart-grid'>
            <div className='shopping-cart__table-container'>
              {cartItems && cartItems.length > 0 ? (
                <>
                  <table className='shopping-cart__table'>
                    <thead className='shopping-cart__table-header'>
                      <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className='shopping-cart__table-body'>
                      {cartItems.map(item => (
                        <tr key={item.id} className='shopping-cart__table-row'>
                          <td className='shopping-cart__product-cell'>
                            <div className='shopping-cart__product-info'>
                              <img
                                src={item.image}
                                alt={item.name}
                                className='shopping-cart__product-image'
                              />
                              <span className='shopping-cart__product-name'>
                                {item.name}
                              </span>
                            </div>
                          </td>
                          <td className='shopping-cart__price-cell'>
                            ${item.price}
                          </td>
                          <td className='shopping-cart__quantity-cell'>
                            <div className='shopping-cart__quantity-controls'>
                              <button
                                className='shopping-cart__quantity-btn'
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </button>
                              <span className='shopping-cart__quantity-value'>
                                {item.quantity}
                              </span>
                              <button
                                className='shopping-cart__quantity-btn'
                                onClick={() => handleIncrement(item)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className='shopping-cart__subtotal-cell'>
                            ${calculateSubtotal(item.price, item.quantity)}
                          </td>
                          <td className='shopping-cart__remove-cell'>
                            <button
                              className='shopping-cart__remove-btn'
                              onClick={() => handleRemove(item.id)}
                            >
                              <CiCircleRemove size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className='shopping-cart__mobile-cart-items'>
                    {cartItems.map(item => (
                      <div
                        key={item.id}
                        className='shopping-cart__mobile-cart-item'
                      >
                        <div className='shopping-cart__mobile-cart-item-header'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='shopping-cart__mobile-cart-item-image'
                          />
                          <div className='shopping-cart__mobile-cart-item-info'>
                            <div className='shopping-cart__mobile-cart-item-info-name'>
                              {item.name}
                            </div>
                            <div className='shopping-cart__mobile-cart-item-info-price'>
                              ${item.price}
                            </div>
                          </div>
                          <button
                            className='shopping-cart__mobile-cart-item-remove'
                            onClick={() => handleRemove(item.id)}
                          >
                            <CiCircleRemove size={16} />
                          </button>
                        </div>
                        <div className='shopping-cart__mobile-cart-item-controls'>
                          <div className='shopping-cart__mobile-cart-item-quantity'>
                            <button
                              className='shopping-cart__quantity-btn'
                              onClick={() => handleDecrement(item.id)}
                            >
                              -
                            </button>
                            <span className='shopping-cart__quantity-value'>
                              {item.quantity}
                            </span>
                            <button
                              className='shopping-cart__quantity-btn'
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </button>
                          </div>
                          <div className='shopping-cart__mobile-cart-item-subtotal'>
                            ${calculateSubtotal(item.price, item.quantity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='shopping-cart__actions'>
                    <Link
                      to='/products'
                      className='shopping-cart__action-btn shopping-cart__return-btn'
                    >
                      Return to Shop
                    </Link>
                    <Link
                      to='#'
                      className='shopping-cart__action-btn shopping-cart__update-btn'
                    >
                      Update Cart
                    </Link>
                  </div>
                  <div className='shopping-cart__coupon-container'>
                    <h3>Coupon Code</h3>
                    <div className='shopping-cart__coupon-input-container'>
                      <input
                        type='text'
                        placeholder='Enter code'
                        className='shopping-cart__coupon-input'
                        value={couponCode}
                        onChange={e => setCouponCode(e.target.value)}
                      />
                      <button
                        className='shopping-cart__coupon-button'
                        onClick={() => handleApplyCoupon()}
                      >
                        {processingCoupon ? 'Applying...' : 'Apply Coupon'}
                      </button>
                    </div>
                  </div>
                  {error && (
                    <p className='shopping-cart__coupon-error'>{error}</p>
                  )}
                </>
              ) : (
                <div className='shopping-cart__items-empty'>
                  <h3 className='shopping-cart__items-empty-title'>
                    Your shopping cart is empty
                  </h3>
                </div>
              )}
            </div>
            <div className='shopping-cart__cart-total'>
              <div className='shopping-cart__cart-total-container'>
                <h3 className='shopping-cart__cart-total-title'>Cart Total</h3>
                <div className='shopping-cart__cart-total-items'>
                  <div className='shopping-cart__cart-total-item'>
                    <span className='shopping-cart__cart-total-item-label'>
                      Subtotal:
                    </span>
                    <span className='shopping-cart__cart-total-item-value'>
                      ${cartItemTotalPrice}
                    </span>
                  </div>
                  <div className='shopping-cart__cart-total-item'>
                    <span className='shopping-cart__cart-total-item-label'>
                      Shipping:{' '}
                    </span>
                    <span className='shopping-cart__cart-total-item-value'>
                      Free
                    </span>
                  </div>
                  <div className='shopping-cart__cart-total-item'>
                    <span className='shopping-cart__cart-total-item-label'>
                      Total:
                    </span>
                    <span className='shopping-cart__cart-total-item-value total-value'>
                      ${cartItemTotalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate('/checkout')}
                    className={`shopping-cart__cart-total-btn ${cartItems.length === 0 ? 'disabled' : ''}`}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
