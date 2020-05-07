import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Product from './Product';

const ProductList = () => {
  const { products, cart, addCart } = useContext(UserContext);
  const [selectedId, setSelectedId] = useState();

  const list = products.map(product => (
    <Product
      key={product.id} 
      product={product}
    />
  ));
  return (
    <div>
      <h3> Product List </h3>
      <ul className="product-list">
        {list}
      </ul>
      <button
        floated="right"
        icon
        labelPosition="left"
        color="red"
        size="small"
        disabled={!selectedId}
      />
    </div>
  );
}
 
export default ProductList;