import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
export const UserContext = createContext(initialState);

const initialState = {
  user_id: '',
  username: '',
  password: '',
  products: [
    { 
      _id: '1',
      name: 'Korean facemask',
      description: 'Korean facemask',
      country: 'South Korea',
      category: 'facemasks',
      price: 100,
      url: 'data:image/jpeg;base64,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'
    },
    { 
      _id: '2',
      name: 'Nongshim Shin Ramyun Noodles',
      description: 'spicy ramen',
      country: 'South Korea',
      category: 'food',
      price: 10,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvbe_jDr27U3Kjojo9IXx7YZeXkkDr6Fl-jlEi36n4XO1gpcwAd9Be4doRww&usqp=CAc'
    }
  ],
  filteredProducts: [],
  cart: [],
  token: ''
}

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  function addCart(id) {
    dispatch({
      type: 'ADD_CART',
      payload: id
    });
  }
  function addProduct(id) {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: id
    });
  }
  function updateProducts(id) {
    dispatch({
      type: 'UPDATE_PRODUCTS',
      payload: id
    });
  }
  function addUsername(id) {
    dispatch({
      type: 'ADD_USERNAME',
      payload: id
    });
  }
  function addPassword(id) {
    dispatch({
      type: 'ADD_PASSWORD',
      payload: id
    });
  }
  function getToken(token){
    dispatch({
      type: 'GET_TOKEN',
      payload: token
    });
  }

  return (
    <UserContext.Provider value={{
      username: state.username,
      products: state.products,
      addCart,
      addProduct,
      addUsername,
      addPassword,
      updateProducts,
      getToken,
      cart: state.cart,
      token: state.token
    }}>
      {props.children}
    </UserContext.Provider>
  );
};
