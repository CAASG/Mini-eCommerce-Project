import { Children, createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item, amount) => {
    const itemAdded = {...item, amount};

    const newCart = [...cart];

    const isOnCart = newCart.find((producto) => producto.id === itemAdded.id)


    if(isOnCart){
      isOnCart.amount += amount;
    }else{
      newCart.push(itemAdded);
    }
    setCart(newCart);
  }

  const amoutOnCart = () => {
    return cart.reduce((acc, prod) => acc + prod.amount, 0)
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.amount, 0);
  }

  const clearCart = () => {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  

  return (
    <CartContext.Provider value={ {
        cart, 
        addToCart, 
        amoutOnCart, 
        totalPrice, 
        clearCart
        } }>
        {children}
    </CartContext.Provider>
  ) 
  
}