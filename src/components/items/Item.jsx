import React from 'react'
import './item.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const Item = ({producto}) => {

    // Generate random rating between 3.5 and 5.0
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
  const ratingCount = Math.floor(Math.random() * 500) + 50;
  
  // Determine if product should be marked as new (example logic)
  const isNew = producto.id % 5 === 0;

  // Function to render stars based on rating
const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} />);
    }
    
    // Add empty stars to make 5 total
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} />);
    }
    
    return stars;
  };

  return (
    <div className={`producto ${isNew ? 'new-product' : ''}`}>
        <div className="image-container">
            <img src={producto.image} alt={producto.name} />
            <div className="overlay"></div>
        </div>
        
        <div className="producto-info">
            <span className="category-badge">{producto.category}</span>
            <h4>{producto.name}</h4>
            
            <div className="rating">
                {renderStars(parseFloat(rating))}
                <span>{rating}</span>
                <span className="rating-count">({ratingCount})</span>
            </div>
            
            <div className="price-container">
                <p className="price">{producto.price}</p>
            </div>
            
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            
            <div className="quick-actions">
                <div className="action-btn">
                    <i className="far fa-heart"></i>
                </div>
                <div className="action-btn">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="action-btn">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item