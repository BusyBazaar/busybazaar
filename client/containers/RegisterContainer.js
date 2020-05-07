import React, { useState } from 'react';

const RegisterContainer = (props) => {
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
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      if (res.status === 406) {
        setError("username already in use try again");
        console.log('hey')
        props.history.push("/register");
      } else {
          props.history.push("/login");
        }
    })
 
 };

  return (
    <div>
      <h2>BusyBazaar</h2>
      <form onSubmit={handleSubmit}>
							<h5>Register</h5>
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
							<div className="input-field">
									<button>Submit</button>
							</div>
					</form>
    </div>
  );
}
 
export default RegisterContainer;