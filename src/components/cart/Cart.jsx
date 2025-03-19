import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex'

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleClear = () => {
        clearCart();
    }

  return (
    <div>
        <h1>Cart</h1>

        {cart.length === 0 ? (
                <h2>The cart is empty</h2>
            ) : (
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                        <p>Price: ${prod.price}</p>
                        <p>Total cost: ${prod.price * prod.amount}</p>
                        <p>Amount: {prod.amount}</p>
                    </div>
                ))
        )}

        { 
            cart.length > 0 &&
            <> 
            <h2>Total cost: ${totalPrice()}</h2>
            <button onClick={handleClear}>Clear</button>
            </>
        }
    </div>
  )
}

export default Cart