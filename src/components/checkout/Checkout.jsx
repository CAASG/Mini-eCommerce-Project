import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext);
    
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const buy = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
         .then((doc) => {
            setOrderId(doc.id);
            clearCart();
         })
    }

    if (orderId) {
        return (
            <div className="success-container">
                <h1 className="success-title">Thank you for your purchase!</h1>
                <p>Your order number is: <span className="order-id">{orderId}</span></p>
                <Link to="/productos" className="continue-shopping">Continue Shopping</Link>
            </div>
        )
    }
    if (cart.length === 0) {
        return (
            <div className="success-container">
                <h1>Your cart is empty</h1>
                <Link to="/productos" className="continue-shopping">Browse Products</Link>
            </div>
        )
    }

  return (
    <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            
            <div className="checkout-content">
                <div className="checkout-form-container">
                    <form className="checkout-form" onSubmit={handleSubmit(buy)}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Enter your name" 
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="form-error">{errors.name.message}</p>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="Enter your email" 
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                id="phone"
                                placeholder="Enter your phone" 
                                {...register("phone", { required: "Phone is required" })}
                            />
                            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                        
                        <button type="submit" className="checkout-btn">Complete Purchase</button>
                    </form>
                </div>
                
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="order-summary-row total">
                        <span>Total</span>
                        <span>${totalPrice().toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Checkout