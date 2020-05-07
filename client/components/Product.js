import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Product = ({ product, key }) => {
  const { cart, addCart } = useContext(UserContext);
  // const [selectedId, setSelectedId] = useState();
  const addToCart = (id) => {
    addCart(id);
    console.log('id:', id);
    console.log('cart :', cart);
  };
  return (
    <li className="prod" onDoubleClick={() => addToCart(product._id)} >
      <ul className="prod-list">
      <li>name: {product.name} </li>
      <li>country: {product.country} </li>
      <li>description: {product.description}</li>
      <li>category: {product.category}</li>
      <li>price: ${product.price}</li>
      <img src={product.url} />
      </ul>
    </li>
  );
}
 
export default Product;

