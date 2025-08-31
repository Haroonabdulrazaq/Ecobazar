export interface ITopCategoryItem {
  id: number;
  name: string;
  image: string;
  count: number;
}

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category?: string;
}

export interface IHotdeal {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category?: string;
}

export interface IBestSeller {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category?: string;
}

export interface ITopRated {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category?: string;
}

export interface ISlide {
  id: number;
  title: string;
  heading: string;
  saleText: string;
  subtitle: string;
  image: string;
  isReversed: boolean;
}

export interface IPerk {
  id: number;
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export interface ITopCategoryItem {
  id: number;
  name: string;
  image: string;
  count: number;
}

export interface ITestimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
  role: string;
}
export interface IInstagram {
  id: number;
  image: string;
  title: string;
}

export interface IProductCategory {
  id: number;
  name: string;
}

export interface IPriceRange {
  id: number;
  priceRange: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
}

export interface BillingFormValues {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  isShippingAddressSame: boolean;
  alternateShippingAddress: string;
  orderNotes: string;
  paymentMethod: string;
}
