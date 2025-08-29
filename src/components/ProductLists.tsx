import React from 'react';
import { featuredProducts } from '../common/data';

const ProductLists = () => {
  return (
    <div>
      {featuredProducts.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <h3>{product.price}</h3>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductLists;
