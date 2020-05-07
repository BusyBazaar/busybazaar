import React, { useState } from 'react';
import Auth from '../components/Auth';
import LoginForm from '../components/LoginForm';

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
      <LoginForm handleSubmit={handleSubmit} handleChangeUsername={handleChangeUsername} handleChangePassword={handleChangePassword} error={error} />
    </div>
  );
}
 
export default LoginContainer;