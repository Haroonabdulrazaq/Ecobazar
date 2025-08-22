import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
