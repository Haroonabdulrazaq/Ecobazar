import React from 'react';
import Carousel from '../components/Carousel';
import TopCategory from '../components/TopCategory';
import FeaturedProducts from '../components/FeaturedProducts';
import NewProducts from '../components/NewProducts';
import Testimonial from '../components/Testimonial';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Carousel />
      <FeaturedProducts />
      <TopCategory />
      <NewProducts />
      <Testimonial />
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
