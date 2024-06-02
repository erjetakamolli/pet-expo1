import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div id="footer" className="footer-container">
        <div className="footer-column">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 9am - 6pm</p>
          <p>Sat: 10am - 2pm</p>
          <p>Sun: Closed</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cats">Cats</a></li>
            <li><a href="/dogs">Dogs</a></li>
            <li><a href="/birds">Birds</a></li>
            <li><Link smooth to="/#about">About Us</Link></li>
            <li><a href="/">Back</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
          <li><a href="#"><img src="/src/Images/facebook.svg.svg" alt="Facebook" /></a></li>
          <li><a href="#"><img src="/src/Images/instagram.svg (2).svg" alt="Instagram" /></a></li>
          <li><a href="#"><img src="/src/Images/twitter.svg.svg" alt="Twitter" /></a></li>
          <li><a href="#"><img src="/src/Images/tik-tok.svg.svg" alt="Tik Tok" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pet Lovers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

