import React from 'react';
import '../assets/stylesheets/page-not-found.scss';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='page-not-found global-padding'>
      <div className='page-not-found__image'></div>
      <h1>Oops! page not found</h1>
      <p className='page-not-found__description'>
        The page you are looking for does not exist.
      </p>
      <button className='page-not-found__button' onClick={() => navigate('/')}>
        Back to home
      </button>
    </div>
  );
};

export default PageNotFound;
