import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="main-nav d-flex">
    <h2 className="header">Math Magicians</h2>
    <ul className="nav-links d-flex j-center a-center">
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/calculator" className="nav-link">Calculator</Link>
      </li>
      <li>
        <Link to="/quotes" className="nav-link">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
