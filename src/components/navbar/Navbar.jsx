import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';
import CartWidget from '../cart/CartWidget';
import logo from '/logo.svg'


const Navbar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close menu when clicking outside or changing routes
  useEffect(() => {
    const closeMenu = () => {
      if (isMenuActive) {
        setIsMenuActive(false);
      }
    };

    // Close menu when route changes
    closeMenu();
    
    // Add event listener for clicks outside
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location.pathname, isMenuActive]);

  // Handle clicks outside the menu
  const handleClickOutside = (e) => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (isMenuActive && menu && hamburger && 
        !menu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      setIsMenuActive(false);
    }
  };

  // Prevent clicks inside menu from closing it
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><img src={logo} alt="TechVault Logo" /><h1>TechVault</h1></Link>

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
            <li><Link className="menu-link" to="/contact">Contact</Link></li>
            <li><CartWidget /></li>
        </ul>

        {isMenuActive && <div className="menu-overlay active" onClick={toggleMenu}></div>}
    </nav>
  )
}

export default Navbar
