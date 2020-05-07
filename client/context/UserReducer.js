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
          state.products.find(product => product.id === action.payload)
        ]
      };
    case "ADD_PRODUCT":
      return {
        ...state, products: [...state.products, action.payload]
      };
    default:
      return state;
  }
}