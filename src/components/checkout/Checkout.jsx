import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext);
    
    const { register, handleSubmit } = useForm();
    
    const buy = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }
        console.log(order);

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
         .then((doc) => {
            setOrderId(doc.id);
            clearCart();
         })
    }

    if (orderId) {
        return (
            <div>
                <h1>Thanks for your purchase!</h1>
                <p>Your order number is: {orderId}</p>
            </div>
        )
    }

  return (
    <div>
        <h1>Finalize Purchase</h1>
        <form action="" onSubmit={handleSubmit(buy)}>
            <input type="text" placeholder='Enter your name' {...register("name")}/>
            <input type="text" placeholder='Enter your e-mail' {...register("email")}/>
            <input type="text" placeholder='Enter your phone' {...register("phone")}/>
            <button type='submit'>Buy</button>
        </form>
    </div>
  )
}

export default Checkout