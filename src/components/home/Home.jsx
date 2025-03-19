import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from '../items/itemLists/ItemList';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, limit(4)); // Get 4 products
        const resp = await getDocs(q);
        
        setFeaturedProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Discover the Latest in Tech and Electronics</h1>
            <p className="hero-subtitle">
              Explore our premium selection of electronics, audio equipment, and accessories.
              Quality products with exceptional service guaranteed.
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="hero-btn hero-btn-primary">
                Shop Now <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="hero-btn hero-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Browse our collection of premium products across different categories</p>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Electronics" className="category-img" />
              <div className="category-overlay">
                <h3 className="category-name">Electronics</h3>
                <p className="category-count">24 Products</p>
              </div>
              <Link to="/productos/electronics" className="category-link" aria-label="Shop Electronics"></Link>
            </div>

            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Accessories" className="category-img" />
              <div className="category-overlay">
                <h3 className="category-name">Accessories</h3>
                <p className="category-count">18 Products</p>
              </div>
              <Link to="/productos/accessories" className="category-link" aria-label="Shop Accessories"></Link>
            </div>

            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Audio" className="category-img" />
              <div className="category-overlay">
                <h3 className="category-name">Audio</h3>
                <p className="category-count">12 Products</p>
              </div>
              <Link to="/productos/audio" className="category-link" aria-label="Shop Audio"></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-container">
          <div className="featured-header">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Our handpicked selection of the finest products</p>
            </div>
            <Link to="/productos" className="view-all-link">
              View All Products <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <ItemList productos={featuredProducts} title="" loading={isLoading} />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Special Offers</h2>
            <p className="section-subtitle">Exclusive deals and limited-time offers on our premium products</p>
          </div>

          <div className="promotion-container">
            <div className="promotion-large">
              <img 
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Summer Sale" 
                className="promotion-img" 
              />
              <div className="promotion-content">
                <span className="promotion-badge">Limited Time</span>
                <h3 className="promotion-title">Summer Sale: Up to 40% Off</h3>
                <p className="promotion-subtitle">Upgrade your tech with our biggest sale of the season</p>
                <Link to="/productos" className="promotion-btn">Shop Now</Link>
              </div>
            </div>

            <div className="promotion-small-container">
              <div className="promotion-small">
                <img 
                  src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="New Arrivals" 
                  className="promotion-img" 
                />
                <div className="promotion-content">
                  <span className="promotion-badge">New</span>
                  <h3 className="promotion-title">Just Arrived</h3>
                  <Link to="/productos" className="promotion-btn">Explore</Link>
                </div>
              </div>

              <div className="promotion-small">
                <img 
                  src="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Free Shipping" 
                  className="promotion-img" 
                />
                <div className="promotion-content">
                  <span className="promotion-badge">Special</span>
                  <h3 className="promotion-title">Free Shipping</h3>
                  <Link to="/productos" className="promotion-btn">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container testimonials-container">
          <div className="section-header">
            <h2 className="section-title testimonials-title">What Our Customers Say</h2>
            <p className="section-subtitle testimonials-subtitle">Don't just take our word for it - here's what our customers think</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "I'm extremely impressed with the quality of products and the customer service. The delivery was prompt and everything arrived in perfect condition."
                </p>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Sarah Johnson" 
                    className="author-avatar" 
                  />
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Loyal Customer</p>
                    <div className="testimonial-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The range of electronics available is impressive. Found exactly what I was looking for at a great price. Will definitely shop here again!"
                </p>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/men/54.jpg" 
                    alt="David Chen" 
                    className="author-avatar" 
                  />
                  <div className="author-info">
                    <h4>David Chen</h4>
                    <p>Tech Enthusiast</p>
                    <div className="testimonial-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Outstanding selection of audio equipment. The premium headphones I purchased exceeded my expectations in terms of sound quality and comfort."
                </p>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/women/67.jpg" 
                    alt="Emma Rodriguez" 
                    className="author-avatar" 
                  />
                  <div className="author-info">
                    <h4>Emma Rodriguez</h4>
                    <p>Music Producer</p>
                    <div className="testimonial-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container newsletter-container">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle">Subscribe to our newsletter to receive the latest updates, promotions, and exclusive offers</p>
          
          <form className="newsletter-form">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="brands-container">
          <h3 className="brands-title">Trusted by Top Brands</h3>
          
          <div className="brands-grid">
            <div className="brand-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png" alt="Samsung" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png" alt="Sony" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="https://1000logos.net/wp-content/uploads/2021/05/Bose-logo.png" alt="Bose" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;