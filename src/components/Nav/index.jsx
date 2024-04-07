import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";
import ShoppingCart from '../ShoppingCart';

function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li><Link to="/Contact" >Contact Us</Link></li>
      </ul>
      <ShoppingCart />
    </nav>
  );
}


export default Navbar;
