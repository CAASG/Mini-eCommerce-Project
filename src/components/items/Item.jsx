import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

    // Generate random rating between 3.5 and 5.0
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
  const ratingCount = Math.floor(Math.random() * 500) + 50;
  
  // Determine if product should be marked as new (example logic)
  const isNew = producto.id % 5 === 0;

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
                {/* Star icons - */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className={`fas fa-star${parseFloat(rating) % 1 >= 0.5 ? '' : '-half-alt'}`}></i>
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