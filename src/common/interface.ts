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
}

export interface IHotdeal {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface IBestSeller {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface ITopRated {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
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
