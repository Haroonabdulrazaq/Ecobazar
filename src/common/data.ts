import {
  IBestSeller,
  IHotdeal,
  IProduct,
  ITopRated,
  ISlide,
  ITopCategoryItem,
  ITestimonial,
  IInstagram,
  IProductCategory,
  IPriceRange,
} from './interface';

import vegetables from '../assets/images/vegetable.png';
import fruits from '../assets/images/fruits.png';
import soft_drinks from '../assets/images/soft-drink.png';
import meat from '../assets/images/meat.png';
import snacks from '../assets/images/snacks.png';
import fish from '../assets/images/fish.png';

import instagramPost1 from '../assets/images/instagram-post-1.png';
import instagramPost2 from '../assets/images/instagram-post-2.png';
import instagramPost3 from '../assets/images/instagram-post-3.png';
import instagramPost4 from '../assets/images/instagram-post-4.png';
import instagramPost5 from '../assets/images/instagram-post-5.png';
import instagramPost6 from '../assets/images/instagram-post-6.png';

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
import freshMangoImg from '../assets/images/fresh-mango.png';
import greenCucumberImg from '../assets/images/green-cucumber.png';
import ladiesFingerImg from '../assets/images/ladies-finger.png';
import redCasicumImg from '../assets/images/red-capsicum.png';
import redChilliImg from '../assets/images/red-chilli.png';
import redTomatoes1Img from '../assets/images/red-tomatoes-1.png';

export const featuredProducts: IProduct[] = [
  {
    id: 1,
    name: 'Green Apple',
    price: 14.99,
    rating: 4.5,
    image: appleImg,
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Chinese Cabbage',
    price: 4.99,
    rating: 4.7,
    image: chineseCabbageImg,
    category: 'Vegetables',
  },
  {
    id: 3,
    name: 'Green Lettuce',
    price: 6.99,
    rating: 4,
    image: greenLettuceImg,
    category: 'Vegetables',
  },
  {
    id: 4,
    name: 'Green Chilli',
    price: 4.99,
    rating: 2.5,
    image: greenChillyImg,
    category: 'Vegetables',
  },
  {
    id: 5,
    name: 'Corn',
    price: 3.99,
    rating: 4,
    image: cornImg,
    category: 'Vegetables',
  },
  {
    id: 6,
    name: 'Red Chilli',
    price: 2.99,
    rating: 5.0,
    image: greenChillyImg,
    category: 'Vegetables',
  },
  {
    id: 7,
    name: 'Red Tomatoes',
    price: 3.99,
    rating: 4,
    image: RedTomatoImg,
    category: 'Vegetables',
  },
  {
    id: 8,
    name: 'Fresh Mango',
    price: 3.99,
    rating: 4,
    image: freshMangoImg,
    category: 'Fruits',
  },
  {
    id: 9,
    name: 'Green Cucumber',
    price: 3.99,
    rating: 4,
    image: greenCucumberImg,
    category: 'Vegetables',
  },
  {
    id: 10,
    name: 'Ladies Finger',
    price: 3.99,
    rating: 4,
    image: ladiesFingerImg,
    category: 'Vegetables',
  },
  {
    id: 11,
    name: 'Red Capsicum',
    price: 3.99,
    rating: 4,
    image: redCasicumImg,
    category: 'Vegetables',
  },
  {
    id: 12,
    name: 'Red Chilli',
    price: 3.99,
    rating: 4,
    image: redChilliImg,
    category: 'Vegetables',
  },
  {
    id: 13,
    name: 'Red Tomatoes',
    price: 3.99,
    rating: 4,
    image: redTomatoes1Img,
    category: 'Vegetables',
  },
  {
    id: 14,
    name: 'Green Okro',
    price: 3.99,
    rating: 4,
    image: OkraImg,
    category: 'Vegetables',
  },
];

export const hotDeals: IHotdeal[] = [
  {
    id: 1,
    name: 'Green Apple',
    price: 14.99,
    rating: 4.5,
    image: appleImg,
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Indian Malta',
    price: 14.99,
    rating: 4.5,
    image: appleImg,
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Green Lettuce',
    price: 6.99,
    rating: 4,
    image: greenLettuceImg,
    category: 'Vegetables',
  },
];

export const bestSellersData: IBestSeller[] = [
  {
    id: 1,
    name: 'Egg plant',
    price: 14.99,
    rating: 4.5,
    image: EggplantImg,
    category: 'Vegetables',
  },

  {
    id: 2,
    name: 'Green Okro',
    price: 3.99,
    rating: 4.1,
    image: OkraImg,
    category: 'Vegetables',
  },
  {
    id: 3,
    name: 'Red Tomatoes',
    price: 14.99,
    rating: 4.5,
    image: RedTomatoImg,
    category: 'Vegetables',
  },
];

export const topRatedData: ITopRated[] = [
  {
    id: 1,
    name: 'Big Potatoes',
    price: 14.99,
    rating: 4.5,
    image: BigPotatoImg,
    category: 'Vegetables',
  },
  {
    id: 2,
    name: 'Fresh Cauliflower',
    price: 14.99,
    rating: 4.5,
    image: FreshCauliflowerImg,
    category: 'Vegetables',
  },
  {
    id: 3,
    name: 'Corn',
    price: 3.99,
    rating: 4,
    image: cornImg,
    category: 'Vegetables',
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

export const instagramData: IInstagram[] = [
  {
    id: 1,
    image: instagramPost1,
    title: 'Fresh tomatoes',
  },
  {
    id: 2,
    image: instagramPost2,
    title: 'Fresh leaves',
  },
  {
    id: 3,
    image: instagramPost3,
    title: 'Green tomatoes',
  },
  {
    id: 4,
    image: instagramPost4,
    title: 'Bell papper',
  },
  {
    id: 5,
    image: instagramPost5,
    title: 'Coconut',
  },
  {
    id: 6,
    image: instagramPost6,
    title: 'ingredients',
  },
];

export const ProductCategory: IProductCategory[] = [
  {
    id: 1,
    name: 'Vegetables',
  },
  {
    id: 2,
    name: 'Fruits',
  },
  {
    id: 3,
    name: 'Meat',
  },
];

export const PriceRange: IPriceRange[] = [
  {
    id: 1,
    priceRange: '0-50',
  },
  {
    id: 2,
    priceRange: '50-100',
  },
  {
    id: 3,
    priceRange: '100-150',
  },
  {
    id: 4,
    priceRange: '150-200',
  },
  {
    id: 5,
    priceRange: '200-250',
  },
];

export const allProducts: IProduct[] = [
  ...featuredProducts,
  ...hotDeals,
  ...bestSellersData,
  ...topRatedData,

  {
    id: 15,
    name: 'Big Potatoes',
    price: 14.99,
    rating: 4.5,
    image: BigPotatoImg,
    category: 'Vegetables',
  },
  {
    id: 16,
    name: 'Fresh Cauliflower',
    price: 14.99,
    rating: 4.5,
    image: FreshCauliflowerImg,
    category: 'Vegetables',
  },
  {
    id: 17,
    name: 'Egg plant',
    price: 14.99,
    rating: 4.5,
    image: EggplantImg,
    category: 'Vegetables',
  },
  {
    id: 18,
    name: 'Indian Malta',
    price: 14.99,
    rating: 4.5,
    image: appleImg,
    category: 'Fruits',
  },
];
