import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ProductList = () => {
  const { products } = useContext(UserContext);
  return (
    <div>
    <h2> Product List </h2>
    <ul className="product-list">
      { products.map(product => (<li className="prod">
        {product.name} {product.country}
        </li>)) }
    </ul>
    </div>
  );
}
 
export default ProductList;