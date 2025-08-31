import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import './App.scss';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <div className='sticky-header'>
        <Header />
        <Navigation />
      </div>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Products />} />
          <Route path='/shopping-cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
