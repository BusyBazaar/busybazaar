export default function reducer (state, action) {
  switch(action.type) {
    case "ADD_USERNAME":
      return {
        ...state, username: action.payload
      };
    case "ADD_PASSWORD":
      return {
        ...state, password: action.payload
      };
    case "ADD_CART":
      return {
        ...state, cart: [...state.cart, 
          state.products.find(product => product._id === action.payload)
        ]
      };
    case "ADD_PRODUCT":
      return {
        ...state, products: [...state.products, action.payload]
      };
    case "UPDATE_PRODUCTS":
      return {
        ...state, products: [...state.products, ...action.payload]
      };
    case "GET_TOKEN":
      return {
        ...state, token: action.payload
      }
  default:
      return state;
  }
}