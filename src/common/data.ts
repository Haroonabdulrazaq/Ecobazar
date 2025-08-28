import {
  IBestSeller,
  IHotdeal,
  IProduct,
  ITopRated,
  ISlide,
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
