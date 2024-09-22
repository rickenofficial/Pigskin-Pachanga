import React from 'react';
import Auth from '../utils/auth';
import NavBar from './NavBar';
function Header() {

  const loggedIn = Auth.loggedIn();
  const userName = loggedIn ? Auth.getProfile().data?.name : '';

  return (
    <header>
      <NavBar isLoggedIn={loggedIn}/>
      
      
      {loggedIn ? (
        <p>Hello {userName}!</p>
      ) : (
        <p></p>
      )}
    </header>
  );
}

export default Header; 