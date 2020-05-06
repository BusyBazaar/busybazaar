import React from 'react';

const Product = ({ product }) => {
  return (
    <li className="prod">
      {product.name} {product.country}
    </li>
  );
}
 
export default Product;