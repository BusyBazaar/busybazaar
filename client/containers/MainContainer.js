import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ProductCart from '../components/ProductCart';
import AddButton from '../components/AddButton';
import { Link } from "react-router-dom";

const MainContainer = (props) => {
  return (
    <div>
      <Header />
      <AddButton />
      <ProductList />
      <ProductCart />
      <Link to="/addproduct">Add Product</Link>
    </div>
  );
}
 
export default MainContainer;