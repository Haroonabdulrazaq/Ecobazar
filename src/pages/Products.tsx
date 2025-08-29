import React from 'react';
import Header from '../components/Header';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ProductLists from '../components/ProductLists';

const Products = () => {
  return (
    <>
      <TopBar />
      <Navigation />
      <Header />
      <ProductLists />
      <Footer />
    </>
  );
};

export default Products;
