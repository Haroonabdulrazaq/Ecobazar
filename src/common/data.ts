import {
  IBestSeller,
  IHotdeal,
  IProduct,
  ITopRated,
  ISlide,
  ITopCategoryItem,
  ITestimonial,
} from './interface';

import vegetables from '../assets/images/vegetable.png';
import fruits from '../assets/images/fruits.png';
import soft_drinks from '../assets/images/soft-drink.png';
import meat from '../assets/images/meat.png';
import snacks from '../assets/images/snacks.png';
import fish from '../assets/images/fish.png';
import banner1 from '../assets/images/banner-1.png';
import banner2 from '../assets/images/banner-2.png';
import banner3 from '../assets/images/banner-3.png';
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
import VegetableBasket1 from '../assets/images/vegetable-basket-1.png';
import VegetableBasket2 from '../assets/images/vegetable-basket-2.png';
import VegetableBasket3 from '../assets/images/vegetable-basket-3.png';
import robertFoxImg from '../assets/images/robert-fox.png';
import danielleRussellImg from '../assets/images/danielle-russell.png';
import eleanorPenaImg from '../assets/images/eleanor-pena.png';

export const featuredProducts: IProduct[] = [
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

export const hotDeals: IHotdeal[] = [
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

export const bestSellersData: IBestSeller[] = [
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

export const topRatedData: ITopRated[] = [
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

export const slides: ISlide[] = [
  {
    id: 1,
    title: 'Welcome to Shopery',
    heading: 'Fresh & Healthy Organic Food',
    saleText: 'Sale up to 30% OFF',
    subtitle: 'Free shipping on all your order. we deliver, you enjoy',
    image: VegetableBasket1,
    isReversed: false,
  },
  {
    id: 2,
    title: 'Welcome to Shopery',
    heading: 'Fresh & Healthy Organic Food',
    saleText: 'Sale up to 30% OFF',
    subtitle: 'Free shipping on all your order. we deliver, you enjoy',
    image: VegetableBasket2,
    isReversed: true,
  },
  {
    id: 3,
    title: 'Welcome to Shopery',
    heading: 'Fresh & Healthy Organic Food',
    saleText: 'Sale up to 30% OFF',
    subtitle: 'Free shipping on all your order. we deliver, you enjoy',
    image: VegetableBasket3,
    isReversed: false,
  },
];
export const topCategoryItems: ITopCategoryItem[] = [
  {
    id: 1,
    name: 'Vegetables',
    image: vegetables,
    count: 165,
  },
  {
    id: 2,
    name: 'Fresh Fruits',
    image: fruits,
    count: 137,
  },
  {
    id: 3,
    name: 'River Fish',
    image: fish,
    count: 34,
  },
  {
    id: 4,
    name: 'Meat',
    image: meat,
    count: 561,
  },
  {
    id: 5,
    name: 'Water & Drink',
    image: soft_drinks,
    count: 48,
  },
  {
    id: 6,
    name: 'Snacks',
    image: snacks,
    count: 651,
  },
  {
    id: 7,
    name: 'Dairy',
    image: soft_drinks,
    count: 63,
  },
  {
    id: 8,
    name: 'Beverages',
    image: snacks,
    count: 24,
  },
];

export const testimonialData: ITestimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: robertFoxImg,
    rating: 5,
    comment:
      'This platform has completely streamlined my workflow. The UI is intuitive and the support team is excellent!',
    role: 'Product Manager',
  },
  {
    id: 2,
    name: 'David Kim',
    image: danielleRussellImg,
    rating: 4,
    comment:
      "Great experience overall! The features are exactly what our team needed, though I'd love to see more integrations.",
    role: 'Software Engineer',
  },
  {
    id: 3,
    name: 'Emily Carter',
    image: eleanorPenaImg,
    rating: 5,
    comment:
      'I was impressed by how quickly I was able to get started. The documentation is clear and easy to follow.',
    role: 'UX Designer',
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    image: robertFoxImg,
    rating: 5,
    comment:
      'The customer service has been fantastic. They really care about their users and it shows in the product.',
    role: 'Startup Founder',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    image: danielleRussellImg,
    rating: 4,
    comment:
      "A solid tool with powerful features. It has helped improve our team's efficiency by at least 30%.",
    role: 'Operations Lead',
  },
  {
    id: 6,
    name: 'James Wilson',
    image: eleanorPenaImg,
    rating: 5,
    comment:
      "Honestly one of the best investments we've made. The product keeps getting better with each update.",
    role: 'Marketing Director',
  },
];
