import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ( {amount, handleRest, handleSum, handleAdd, added, maxStock} ) => {

    
  return (
    <div className="item-count-container">
      <div className="quantity-selector">
        <button 
          className="quantity-btn minus" 
          onClick={handleRest} 
          disabled={amount <= 1}
          aria-label="Decrease quantity"
        ></button>
        <p className="quantity-value">{amount}</p>
        <button 
          className="quantity-btn plus" 
          onClick={handleSum} 
          disabled={amount >= maxStock}
          aria-label="Increase quantity"
        ></button>
      </div>
      <button 
        className={`add-to-cart-btn ${added ? 'success' : ''}`}
        onClick={handleAdd}
      >
        <i className="fas fa-shopping-cart"></i>
        {added ? 'Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ItemCount