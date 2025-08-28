import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import TopCategory from './components/TopCategory';
import NewProducts from './components/NewProducts';

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
    </div>
  );
}

export default App;
