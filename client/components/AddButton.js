import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const AddButton = () => {
  const { updateProducts } = useContext(UserContext);
  const handleGetProducts = e => {
    console.log('hey')
    e.preventDefault();
    fetch('/getproducts', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
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
