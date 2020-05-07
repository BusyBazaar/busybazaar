import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {username} !</h1>
    <h2>
      BusyBazaar 
    </h2>
    </div>
  );
}
 
export default Header;