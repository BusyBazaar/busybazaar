import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProductContainer = (props) => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    country: '',
    category: '',
    price: '',
    url: ''
  });
  const { name, description, country, category, price, url } = inputs;

  const [submitted, setSubmitted] = useState(false);

  const { addProduct } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    console.log('inputs ', inputs)
    if (name && description && country && category && price && url) {
        addProduct({...inputs });
        fetch('/product/add', {
          method: 'POST',
          body: JSON.stringify({...inputs}),
          headers: { 'Content-Type': 'application/json' },
        }) 
        .then(res => {
          props.history.push('/')
        })
    }
}

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('username:' + username)
  //   fetch('/auth/login', {
  //       method: 'POST',
  //       body: JSON.stringify({username, password}),
  //       headers: { 'Content-Type': 'application/json' },
  //   })
  //       // 401 and 406  
  //       .then(res => {
  //           if (res.status === 401) {
  //               setError('This password does not match')
  //           } else if (res.status === 406) {
  //               setError('This username is not found')
  //               props.history.push('/login')
  //           } else {
  //             addUsername(username);
  //             addPassword(password);
  //             Auth.login(() => props.history.push('/'));
  //           }
  //       })
  //    }

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
              <input
                  type="text"
                  name="country"
                  value={country}
                  id="country"
                  onChange={handleChange}
                  placeholder="country"
              />
          </div>
          <div className="input-field">
              <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={handleChange}
                  placeholder="category"
              />
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