import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex'
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {

    const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

    const handleClear = () => {
        clearCart();
    }

  return (
    <div className="cart-container">
            <div className="cart-header">
                <h1 className="cart-title">Your Shopping Cart</h1>
                {cart.length > 0 && (
                    <span className="cart-count-detail">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
                )}
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <h2 className="empty-cart-message">Your cart is empty</h2>
                    <p>Looks like you haven't added any products to your cart yet.</p>
                    <Link to="/productos" className="continue-shopping-btn">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((prod) => (
                            <div className="cart-item" key={prod.id}>
                                <img 
                                    src={prod.image} 
                                    alt={prod.name} 
                                    className="cart-item-image" 
                                />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{prod.name}</h3>
                                    <p className="cart-item-price">Price: ${prod.price}</p>
                                    <p className="cart-item-total">Total: ${(prod.price * prod.amount).toFixed(2)}</p>
                                    <p className="cart-item-amount">
                                        Quantity: <span>{prod.amount}</span>
                                    </p>
                                </div>
                                <button 
                                    className="cart-item-remove" 
                                    onClick={() => removeItem(prod.id)}
                                    aria-label={`Remove ${prod.name} from cart`}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>${totalPrice().toFixed(2)}</span>
                        </div>
                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="cart-summary-row total">
                            <span>Total</span>
                            <span>${totalPrice().toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="cart-actions">
                        <button 
                            className="clear-cart-btn" 
                            onClick={handleClear}
                        >
                            Clear Cart
                        </button>
                        <Link to="/checkout" className="checkout-btn">
                            Proceed to Checkout <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </>
            )}
        </div>
  )
}

export default Cart