import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContex'

const CartWidget = () => {

    const { amoutOnCart } = useContext(CartContext);
  
    return (
    <div>
        <Link className="menu-link" to="/cart">
        Cart
        <span> {amoutOnCart()}</span>
        </Link>
    </div>
  )
}

export default CartWidget