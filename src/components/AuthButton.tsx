import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AuthButton() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="auth-button">
      {isAuthenticated ? (
        <div className="user-menu">
          <img src={user?.picture} alt={user?.name} className="avatar" />
          <div className="dropdown">
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => window.location.href = '/profile'}>Profile</button>
          </div>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()} className="login-button">
          Login
        </button>
      )}
    </div>
  );
}

export default AuthButton;