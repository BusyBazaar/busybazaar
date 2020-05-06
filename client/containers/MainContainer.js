import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ProductDisplay from '../components/ProductDisplay';

const MainContainer = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <ProductDisplay />
      MainContainer
    </div>
  );
}
 
export default MainContainer;