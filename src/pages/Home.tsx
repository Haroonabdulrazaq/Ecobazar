import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import TopCategory from '../components/TopCategory';
import TopBar from '../components/TopBar';
import FeaturedProducts from '../components/FeaturedProducts';
import NewProducts from '../components/NewProducts';
import Testimonial from '../components/Testimonial';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navigation />
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
