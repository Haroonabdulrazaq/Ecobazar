import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  companyName: Yup.string()
    .optional()
    .max(100, 'Company name must be less than 100 characters'),
  streetAddress: Yup.string()
    .required('Street address is required')
    .min(5, 'Street address must be at least 5 characters')
    .max(200, 'Street address must be less than 200 characters'),
  country: Yup.string()
    .required('Country is required')
    .oneOf(['US', 'CA', 'UK'], 'Please select a valid country'),
  state: Yup.string()
    .required('State is required')
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must be less than 50 characters'),
  zipCode: Yup.string()
    .required('Zip code is required')
    .matches(/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required')
    .max(100, 'Email must be less than 100 characters'),
  phone: Yup.string().matches(
    /^[+]?[0-9][\d]{0,15}$/,
    'Please enter a valid phone number'
  ),
  isShippingAddressSame: Yup.boolean(),
  alternateShippingAddress: Yup.string().when('isShippingAddressSame', {
    is: true,
    then: schema =>
      schema
        .required(
          'Alternate shipping address is required when shipping to different address'
        )
        .min(5, 'Alternate shipping address must be at least 5 characters')
        .max(
          200,
          'Alternate shipping address must be less than 200 characters'
        ),
    otherwise: schema => schema.optional(),
  }),
  orderNotes: Yup.string()
    .optional()
    .max(500, 'Order notes must be less than 500 characters'),
});

export default validationSchema;
