import React from 'react';
import Auth from '../components/Auth';
import SignIn from '../components/SignIn';

const LoginContainer = (props) => {
  const handleLogin = () => {
    Auth.login(() => {
      props.history.push("/");
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <SignIn />
    </div>
  );
}
 
export default LoginContainer;