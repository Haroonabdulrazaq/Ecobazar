import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import TopCategory from './components/TopCategory';
import NewProducts from './components/NewProducts';
import Testimonial from './components/Testimonial';
import Instagram from './components/Instagram';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Header />
      <Navigation />
      <Carousel />
      <FeaturedProducts />
      <TopCategory />
      <NewProducts />
      <Testimonial />
      <Instagram />
    </div>
  );
}

export default App;
