import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Product from './Product';

const ProductList = () => {
  const { products } = useContext(UserContext);
  return (
    <div>
    <h2> Product List </h2>
    <ul className="product-list">
      { products.map(product => (<Product key={product.id} product={product}/>))}
    </ul>
    </div>
  );
}
 
export default ProductList;