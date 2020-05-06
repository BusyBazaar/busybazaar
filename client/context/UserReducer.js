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
    case "ADD_PRODUCT":
      return {
        ...state, cart: [...state.cart, 
          state.products.filter(product => product.id === action.payload)
        ]
      };
    default:
      return state;
  }
}