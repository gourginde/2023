import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/models">Models</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

  );
};

export default Navbar;
