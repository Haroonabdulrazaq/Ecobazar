import React from 'react';
import './App.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';

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
          <Route path='/products' element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
