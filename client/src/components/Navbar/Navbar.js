import React from 'react';
import './Navbar.css';

const Navbar = ({ onDashboardClick, onHomeClick, onAboutClick, onContactClick }) => {
  const handleDashboardClick = (event) => {
    event.preventDefault();
    onDashboardClick();
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handleAboutClick = (event) => {
    event.preventDefault();
    onAboutClick();
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    onContactClick();
  };

  return (
    <nav className="navbar">
      <ul>
        <img src = "./user.png" style={{width: '100px'}}/>
        <br/><br/>
        <li><a href="#" onClick={handleHomeClick}>Home</a></li> 
        <li><a href="#" onClick={handleDashboardClick}>Dashboard</a></li>
        <li><a href="#" onClick={handleAboutClick}>About</a></li>
        <li><a href="#" onClick={handleContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
