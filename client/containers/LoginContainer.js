import React from 'react';
import Auth from '../components/Auth';
import LoginForm from '../components/LoginForm';

const LoginContainer = (props) => {
  const handleLogin = () => {
    Auth.login(() => {
      props.history.push("/");
    });
  };
  
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <LoginForm />
    </div>
  );
}
 
export default LoginContainer;