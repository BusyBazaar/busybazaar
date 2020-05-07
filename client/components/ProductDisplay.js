import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Product from './Product';

const ProductDisplay = () => {
  const { cart } = useContext(UserContext);
  return (
    <div>
      CART
      { cart.length > 0 ? <ul className="cart-list"> { cart.map(product => (<Product key={product.id} product={product} />))}
      </ul> : <ul>Your Cart is Empty</ul> }
    </div>
  );
}
 
export default ProductDisplay;