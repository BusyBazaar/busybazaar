import React, { useState } from 'react';
import Auth from '../components/Auth';
import { Link } from "react-router-dom";

const LoginContainer = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeUsername = e => {
    setUsername(e.target.value.trim());
  };
  const handleChangePassword = e => {
    setPassword(e.target.value.trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('username:' + username)
    fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
    })
        // 401 and 406  
        .then(res => {
            if (res.status === 401) {
                setError('This password does not match')
            } else if (res.status === 406) {
                setError('This username is not found')
                props.history.push('/login')
            } else {
              Auth.login(() => props.history.push('/'));
            }
        })
  }

  return (
    <div>
      <h2>BusyBazaar</h2>
      <form onSubmit={handleSubmit}>
							<h5>Sign In</h5>
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
 
export default LoginContainer;