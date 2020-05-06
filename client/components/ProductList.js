import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Product from './Product';

const ProductList = () => {
  const { products } = useContext(UserContext);
  return (
    <div>
    <h3> Product List </h3>
    <ul className="product-list">
      { products.map(product => (<Product key={product.id} product={product}/>))}
    </ul>
    </div>
  );
}
 
export default ProductList;