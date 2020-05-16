import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useForm from "../components/useForm";

const ProductContainer = (props) => {
  let history = useHistory();
  const { handleChange, handleSubmit, inputs } = useForm(submit);
  const { name, description, country, category, price, url } = inputs;

  // const [submitted, setSubmitted] = useState(false);

  const { addProduct, token } = useContext(UserContext);

  function submit(){
    addProduct({...inputs});
    fetch('/product/add', {
      method: 'POST',
      body: JSON.stringify({...inputs}),
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
    }) 
    .then(res => {
      history.push('/')
    })
  }

  return (
    <div>
      <h2>BusyBazaar</h2>
      <form onSubmit={handleSubmit}>
          <h3>ADD A PRODUCT</h3>
          <div className="input-field">
              <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={handleChange}
                  placeholder="name"
              />
          </div>
          <div className="input-field">
              <input
                  type="text"
                  name="description"
                  value={description}
                  id="description"
                  onChange={handleChange}
                  placeholder="description"
              />
          </div>
          <div className="input-field">
              <select value={country} id="country" name="country" onChange={handleChange}>
                  <option value="" disabled selected hidden>Country</option>
                  <option value="afghanistan">Afghanistan</option>
                  <option value="argentina">Argentina</option>
                  <option value="brazil">Brazil</option> 
                  <option value="canada">Canada</option>
                  <option value="china">China</option>
                  <option value="hongkong">Hong Kong</option>
                  <option value="india">India</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="iran">Iran</option>
                  <option value="iraq">Iraq</option>
                  <option value="japan">Japan</option>
                  <option value="macau">Macau</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="mexico">Mexico</option>
                  <option value="northkorea">North Korea</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="peru">Peru</option>
                  <option value="russia">Russia</option>
                  <option value="singapore">Singapore</option>
                  <option value="south-korea">South Korea</option>
                  <option value="taiwan">Taiwan</option>
                  <option value="thailand">Thailand</option>
                  <option value="turkey">Turkey</option>
                  <option value="vietnam">Vietnam</option>
               </select>
          </div>
          <div className="input-field">
              <select value={category} id="category" name="category" onChange={handleChange}>
                <option value="" disabled selected hidden>Category</option>
                <option value="baby">Baby</option>
                <option value="beauty">Beauty</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food</option>
                <option value="health">Health</option>
                <option value="home">Home</option>
                <option value="sports">Sports</option>
                <option value="toys">Toys</option>
                <option value="travel">Travel</option>
                <option value="video-games">Video Games</option>
              </select>
          </div>        
          <div className="input-field">
              <input
                  type="number"
                  name="price"
                  value={price}
                  id="price"
                  onChange={handleChange}
                  placeholder="enter price in dollars"
              />
          </div>          
          <div className="input-field">
              <input
                  type="text"
                  name="url"
                  value={url}
                  id="url"
                  onChange={handleChange}
                  placeholder="url"
              />
          </div>
          <div className="input-field">
						<button>Submit</button>
					</div>
      </form>
    </div>
  );
}
 
export default ProductContainer;