import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import CartWidget from '../cart/CartWidget';

const Navbar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>eCommerce</h1></Link>

        <div 
        className={`hamburger ${isMenuActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

        <ul className='menu'>
            <li><Link className="menu-link" to="/">Home</Link></li>
            <li><Link className="menu-link" to="/productos">Products</Link></li>
            <li><Link className="menu-link" to="/productos/electronics">Electronics</Link></li>
            <li><Link className="menu-link" to="/productos/accessories">Accessories</Link></li>
            <li><Link className="menu-link" to="/productos/audio">Audio</Link></li>
            <li><Link className="menu-link" to="/us">About Us</Link></li>
            <li><Link className="menu-link" to="/contact">Contact</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar
