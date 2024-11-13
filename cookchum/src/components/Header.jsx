import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>COOKCHUM</h1>
        <p>Healthy and Fresh Grocery</p>
      </div>
      <button className="about-btn">About Us</button>
    </header>
  );
}

export default Header;
