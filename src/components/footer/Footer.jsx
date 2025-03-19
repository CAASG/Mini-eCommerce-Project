import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-title">eCommerce</h3>
            <p className="footer-description">
              Your one-stop destination for premium electronics, audio equipment,
              and accessories. Quality products with exceptional service.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-list-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/productos">Products</Link></li>
              <li><Link to="/us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-list-title">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/productos/electronics">Electronics</Link></li>
              <li><Link to="/productos/accessories">Accessories</Link></li>
              <li><Link to="/productos/audio">Audio</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-list-title">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Tech Street, Digital City, 10010</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>support@ecommerce.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get the latest updates, offers and special announcements.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="payment-methods">
            <h4>Payment Methods</h4>
            <div className="payment-icons">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
              <i className="fab fa-cc-discover"></i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} eCommerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer