import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="header">
      <h1>Hello {username} !</h1>
    <h1>
      Welcome to BusyBazaar!
    </h1>
    </div>
  );
}
 
export default Header;