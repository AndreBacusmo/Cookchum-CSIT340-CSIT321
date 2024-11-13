import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/aboutus'); // Assuming '/' is your starting page route
  };
  return (
    <header className="header">
      <div className="logo">
      </div>
      <button onClick={handleOnClick} className="about-btn">About Us</button>
    </header>
  );
}

export default Header;