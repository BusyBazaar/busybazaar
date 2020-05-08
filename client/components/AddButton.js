import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const AddButton = () => {
  const { updateProducts } = useContext(UserContext);
  const handleGetProducts = e => {
    console.log('hey')
    e.preventDefault();
    fetch('http://localhost:3000/product/products', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((json) => {
        updateProducts(json);
        })
  }
  return (
    <div>
      <button onClick={handleGetProducts}>Update Products</button>
    </div>
  );
}

export default AddButton;
