import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContex'


const CartWidget = () => {

    const { amoutOnCart } = useContext(CartContext);
  
    return (
    <div>
        <Link className="menu-link cart-widget" to="/cart">
            <i className="fas fa-shopping-cart cart-icon"></i>
            {amoutOnCart() > 0 && (
                <span className="cart-count">{amoutOnCart()}</span>
            )}
        </Link>
    </div>
  )
}

export default CartWidget