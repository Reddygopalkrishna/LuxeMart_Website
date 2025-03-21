import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const { getTotalCartItems } = useContext(ShopContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>LuxeMart</p>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${mobileMenu ? 'show' : ''}`}>
        <li onClick={() => { setMenu('shop'); setMobileMenu(false); }}>
          <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('mens'); setMobileMenu(false); }}>
          <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('women'); setMobileMenu(false); }}>
          <Link to="/womens" style={{ textDecoration: 'none' }}>Women</Link>
          {menu === 'women' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('kids'); setMobileMenu(false); }}>
          <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === 'kids' ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
