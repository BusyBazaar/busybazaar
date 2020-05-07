import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ProductCart from '../components/ProductCart';

const MainContainer = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <ProductCart />
    </div>
  );
}
 
export default MainContainer;