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
    <li className="prod" onDoubleClick={() => addToCart(product.id)} >
      name: {product.name} 
      <div></div>
      country: {product.country}
      <div></div>
      description: {product.description}
      <div></div>
      category: {product.category}
      <div></div>
      price: {product.price}
      <div></div>
      <img src={product.url} />
    </li>
  );
}
 
export default Product;

