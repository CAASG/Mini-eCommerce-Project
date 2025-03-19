import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../../../context/CartContex';
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const { cart, addToCart } = useContext(CartContext);
  console.log(cart)

  const [amount, setAmount] = useState(1);

  const [added, setAdded] = useState(false);

    const handleRest = () => {
        amount > 1 && setAmount(amount - 1);
    }
    const handleSum = () => {
        amount < item.stock && setAmount(amount + 1);
    }
    
    const handleAddToCart = () => {
      addToCart(item, amount);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }

    // Get stock status
  const getStockStatus = () => {
    if (item.stock <= 0) return "out";
    if (item.stock < 5) return "low";
    return "in";
  }

  const stockStatus = getStockStatus();
  const stockText = {
    "out": "Out of Stock",
    "low": `Low Stock (${item.stock} left)`,
    "in": "In Stock"
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-detail-img-container">
          <img className="item-detail-img" src={item.image} alt={item.name} />
        </div>
        <div className="item-detail-content">
          <h2 className="item-detail-title">{item.name}</h2>
          <span className="item-detail-category">{item.category}</span>
          <p className="item-detail-price">{item.price}</p>
          
          <div className={`item-detail-stock ${stockStatus}`}>
            <i className={`fas fa-${stockStatus === "out" ? "times-circle" : "check-circle"}`}></i>
            {stockText[stockStatus]}
          </div>
          
          <p className="item-detail-description">{item.description}</p>
          
          {item.stock > 0 && (
            <ItemCount 
              amount={amount} 
              handleSum={handleSum} 
              handleRest={handleRest} 
              handleAdd={handleAddToCart}
              added={added}
              maxStock={item.stock}
            />
          )}
          
          {item.features && (
            <div className="item-features">
              <h3>Features</h3>
              <ul className="features-list">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail