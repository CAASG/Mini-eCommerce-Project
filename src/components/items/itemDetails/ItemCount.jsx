import React, { useState } from 'react'

const ItemCount = ( {amount, handleRest, handleSum, handleAdd} ) => {

   
    
  return (
    <div>
        <div>
            <button onClick={handleRest}></button>
            <p>{amount}</p>
            <button onClick={handleSum}></button>
        </div>
        <button onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

export default ItemCount