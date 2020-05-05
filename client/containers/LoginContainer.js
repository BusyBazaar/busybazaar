import React from 'react';
import Auth from '../components/Auth';

const LoginContainer = (props) => {
  const handleLogin = () => {
    Auth.login(() => {
      props.history.push("/");
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
 
export default LoginContainer;