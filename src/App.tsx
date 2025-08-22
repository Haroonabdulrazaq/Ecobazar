import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Header />
      <Navigation />
      <Carousel />
    </div>
  );
}

export default App;
