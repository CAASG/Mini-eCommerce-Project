import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../../../context/CartContex';

const ItemDetail = ({item}) => {

  const { cart, addToCart } = useContext(CartContext);
  console.log(cart)

  const [amount, setAmount] = useState(1);

    const handleRest = () => {
        amount > 1 && setAmount(amount - 1);
    }
    const handleSum = () => {
        amount < item.stock && setAmount(amount + 1);
    }
    

  return (
    <div>
        <div>
            <img src={item.image} />
            <div>
                <h2>{item.name}</h2>
                <p>Category: {item.category}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <ItemCount 
                amount={amount} 
                handleSum={handleSum} 
                handleRest={handleRest} 
                handleAdd={() => { addToCart(item, amount) }} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail