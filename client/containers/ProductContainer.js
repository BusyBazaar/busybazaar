import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProductContainer = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const { addProduct } = useContext(UserContext);

  const handleChangeUsername = e => {
    setUsername(e.target.value.trim());
  };
  const handleChangePassword = e => {
    setPassword(e.target.value.trim());
  };
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
              <label htmlFor="username">username</label>
              <input
                  type="text"
                  value={username}
                  id="username"
                  onChange={handleChangeUsername}
              />
          </div>
          <div className="input-field">
              <label htmlFor="password">password</label>
              <input
                  type="password"
                  value={password}
                  id="password"
                  onChange={handleChangePassword}
              />
          </div>
          <Link to="/register">Register</Link>
          <div className="input-field">
              <button>Login</button>
          </div>
      </form>
    </div>
  );
}
 
export default ProductContainer;