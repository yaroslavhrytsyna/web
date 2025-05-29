import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">KidsClubFinder</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/clubs">Clubs</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;