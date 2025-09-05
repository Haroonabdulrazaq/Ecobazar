import '../assets/stylesheets/billing-form.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import validationSchema from '../common/validation';
import {
  clearCart,
  selectAllCartItems,
} from '../state/features/cart/cartSlice';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';
import { BillingFormValues } from '../common/interface';

const BillingForm = () => {
  const cartItems = useSelector(selectAllCartItems);
  const dispatch = useDispatch();
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const initialValues: BillingFormValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    country: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
    isShippingAddressSame: false,
    alternateShippingAddress: '',
    orderNotes: '',
    paymentMethod: 'cod',
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal;

  const handleSubmit = (
    values: BillingFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(values);
      setSubmitting(false);
      resetForm();
      dispatch(clearCart());
      setShowOrderPopup(true);
    }, 5000);
  };

  const handleClosePopup = () => {
    setShowOrderPopup(false);
  };
  return (
    <div className='billing-form '>
      <div className='billing-form__header'>
        <div className='billing-form__header-breadcrumbs global-padding'>
          <Link to='/'>
            <IoHomeOutline />
          </Link>
          <RxCaretRight />
          <Link to='/shopping-cart'>Shopping Cart</Link>
          <RxCaretRight />
          <Link to='/checkout'>Checkout</Link>
        </div>
      </div>
      <div className='billing-form__container global-padding'>
        <div className='billing-form__form'>
          <h2 className='billing-form__form-title'>Billing Information</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
                <div className='billing-form__row'>
                  <div className='billing-form__field'>
                    <label htmlFor='firstName' className='billing-form__label'>
                      First Name <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      type='text'
                      id='firstName'
                      name='firstName'
                      className={`billing-form__input ${
                        errors.firstName && touched.firstName
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter your first name'
                    />
                    <ErrorMessage
                      name='firstName'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                  <div className='billing-form__field'>
                    <label htmlFor='lastName' className='billing-form__label'>
                      Last Name <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      type='text'
                      id='lastName'
                      name='lastName'
                      className={`billing-form__input ${
                        errors.lastName && touched.lastName
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter your last name'
                    />
                    <ErrorMessage
                      name='lastName'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                  <div className='billing-form__field'>
                    <label
                      htmlFor='companyName'
                      className='billing-form__label'
                    >
                      Company Name (Optional)
                    </label>
                    <Field
                      type='text'
                      id='companyName'
                      name='companyName'
                      className={`billing-form__input ${
                        errors.companyName && touched.companyName
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter company name'
                    />
                    <ErrorMessage
                      name='companyName'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                </div>

                <div className='billing-form__row'>
                  <div className='billing-form__field billing-form__field--full'>
                    <label
                      htmlFor='streetAddress'
                      className='billing-form__label'
                    >
                      Street Address <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      type='text'
                      id='streetAddress'
                      name='streetAddress'
                      className={`billing-form__input ${
                        errors.streetAddress && touched.streetAddress
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter your street address'
                    />
                    <ErrorMessage
                      name='streetAddress'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                </div>

                <div className='billing-form__row'>
                  <div className='billing-form__field'>
                    <label htmlFor='country' className='billing-form__label'>
                      Country/Region <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      as='select'
                      id='country'
                      name='country'
                      className={`billing-form__input ${
                        errors.country && touched.country
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                    >
                      <option value=''>Select Country</option>
                      <option value='US'>United States</option>
                      <option value='CA'>Canada</option>
                      <option value='UK'>United Kingdom</option>
                    </Field>
                    <ErrorMessage
                      name='country'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                  <div className='billing-form__field'>
                    <label htmlFor='state' className='billing-form__label'>
                      State <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      as='select'
                      id='state'
                      name='state'
                      className={`billing-form__input ${
                        errors.state && touched.state
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                    >
                      <option value=''>Select State</option>
                      <option value='CA'>California</option>
                      <option value='NY'>New York</option>
                      <option value='TX'>Texas</option>
                      <option value='FL'>Florida</option>
                      <option value='IL'>Illinois</option>
                    </Field>
                    <ErrorMessage
                      name='state'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                  <div className='billing-form__field'>
                    <label htmlFor='zipCode' className='billing-form__label'>
                      Zip Code <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      type='text'
                      id='zipCode'
                      name='zipCode'
                      className={`billing-form__input ${
                        errors.zipCode && touched.zipCode
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter zip code'
                    />
                    <ErrorMessage
                      name='zipCode'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                </div>

                <div className='billing-form__row'>
                  <div className='billing-form__field'>
                    <label htmlFor='email' className='billing-form__label'>
                      Email <span className='text-red-300'>*</span>
                    </label>
                    <Field
                      type='email'
                      id='email'
                      name='email'
                      className={`billing-form__input ${
                        errors.email && touched.email
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter your email address'
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                  <div className='billing-form__field'>
                    <label htmlFor='phone' className='billing-form__label'>
                      Phone
                    </label>
                    <Field
                      type='tel'
                      id='phone'
                      name='phone'
                      className={`billing-form__input ${
                        errors.phone && touched.phone
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                      placeholder='Enter your phone number'
                    />
                    <ErrorMessage
                      name='phone'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                </div>

                <div className='billing-form__row'>
                  <div className='billing-form__field billing-form__field--full'>
                    <div className='billing-form__checkbox-container'>
                      <Field
                        type='checkbox'
                        id='isShippingAddressSame'
                        name='isShippingAddressSame'
                        className='billing-form__checkbox'
                      />
                      <label
                        htmlFor='isShippingAddressSame'
                        className='billing-form__checkbox-label'
                      >
                        Ship to a different address
                      </label>
                    </div>
                  </div>
                </div>

                {values.isShippingAddressSame && (
                  <div className='billing-form__row'>
                    <div className='billing-form__field billing-form__field--full'>
                      <label
                        htmlFor='alternateShippingAddress'
                        className='billing-form__label'
                      >
                        Alternate Shipping Address{' '}
                        <span className='text-red-300'>*</span>
                      </label>
                      <Field
                        type='text'
                        id='alternateShippingAddress'
                        name='alternateShippingAddress'
                        className={`billing-form__input ${
                          errors.alternateShippingAddress &&
                          touched.alternateShippingAddress
                            ? 'billing-form__input--error'
                            : ''
                        }`}
                        placeholder='Enter alternate shipping address'
                      />
                      <ErrorMessage
                        name='alternateShippingAddress'
                        component='div'
                        className='billing-form__error'
                      />
                    </div>
                  </div>
                )}

                <div className='billing-form__divider'></div>

                <div className='billing-form__additional-info'>
                  <h3 className='billing-form__additional-title'>
                    Additional Info
                  </h3>
                  <div className='billing-form__field billing-form__field--full'>
                    <label htmlFor='orderNotes' className='billing-form__label'>
                      Order Notes
                    </label>
                    <Field
                      as='textarea'
                      id='orderNotes'
                      name='orderNotes'
                      placeholder='Notes about your order, e.g. special notes for delivery'
                      className={`billing-form__textarea ${
                        errors.orderNotes && touched.orderNotes
                          ? 'billing-form__input--error'
                          : ''
                      }`}
                    />
                    <ErrorMessage
                      name='orderNotes'
                      component='div'
                      className='billing-form__error'
                    />
                  </div>
                </div>

                <div className='billing-form__submit-container'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='billing-form__submit-button'
                  >
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className='billing-form__order-summary'>
          <h3 className='billing-form__order-title'>Order Summary</h3>

          <div className='billing-form__cart-items'>
            {cartItems.map(item => (
              <div key={item.id} className='billing-form__cart-item'>
                <div className='billing-form__cart-item-info'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='billing-form__cart-item-image'
                  />
                  <span className='billing-form__cart-item-name'>
                    {item.name} x {item.quantity}
                  </span>
                </div>
                <div className='billing-form__cart-item-price'>
                  ${item.price * item.quantity}
                </div>
                <div className='divider'></div>
              </div>
            ))}
          </div>

          <div className='billing-form__totals'>
            <div className='billing-form__total-row'>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className=' divider'></div>
            <div className='billing-form__total-row billing-form__total-row--border'>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className=' divider'></div>
            <div className='billing-form__total-row billing-form__total-row--total'>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className='payment-method'>
            <h3 className='payment-method__title'>Payment Method</h3>
            <div className='payment-method__options'>
              <div className='payment-method__option'>
                <input
                  type='radio'
                  defaultChecked
                  id='cod'
                  name='payment-method'
                />
                <label htmlFor='cod'>Cash on delivery</label>
              </div>
              <div className='payment-method__option'>
                <input type='radio' id='paypal' name='payment-method' />
                <label htmlFor='payment-method-1'>Paypal</label>
              </div>
              <div className='payment-method__option'>
                <input type='radio' id='amazon-pay' name='payment-method' />
                <label htmlFor='payment-method-1'>Amazon Pay</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showOrderPopup && (
        <div className='billing-form__popup-overlay'>
          <div className='billing-form__popup'>
            <div className='billing-form__popup-content'>
              <FaTruckFast className='billing-form__popup-icon' />
              <h3 className='billing-form__popup-title'>
                Order is on its way!
              </h3>
              <p className='billing-form__popup-message'>
                Thank you for your order. You'll receive a confirmation email
                shortly.
              </p>
              <button
                onClick={handleClosePopup}
                className='billing-form__popup-button'
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingForm;
