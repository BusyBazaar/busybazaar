import React from 'react';

const Product = ({ product }) => {
  return (
    <li className="prod">
      name: {product.name} 
      <div></div>
      country: {product.country}
      <div></div>
      description: {product.description}
      <div></div>
      category: {product.category}
      <div></div>
      <img src={product.url} />
    </li>
  );
}
 
export default Product;

