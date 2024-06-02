import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Images/logo1.jpg'; 
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Pet Expo Logo" className="navbar-logo" />
          </Link>
          <span className="navbar-title">PET LOVERS</span>
        </div>
        <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><Link smooth to="/#about">About</Link></li>
            <li><Link to="/cats">Cats</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
            <li><Link to="/birds">Birds</Link></li>
            <li><Link smooth to="/#contactus">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;