import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
export const UserContext = createContext(initialState);

const initialState = {
  user_id: '',
  username: '',
  password: '',
  products: [
    { 
      id: '',
      name: 'Korean facemask',
      description: 'Korean facemask',
      country: 'South Korea',
      category: 'facemasks',
    }
  ],
  cart: []
}

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  );
};
