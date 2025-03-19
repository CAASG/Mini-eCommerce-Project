import React from 'react'
import Item from '../Item'
import './ItemList.css'
import { toCapital } from '../../../helpers/toCapital'

const ItemList = ( {productos, title, loading} ) => {

  return (
    <div className="productos-container">
        <h2 className="productos-title">{toCapital(title)}</h2>
        <div className='productos'>
            {loading ? (
                // Show loading placeholders when loading
                Array(6).fill().map((_, index) => (
                    <div key={index} className="producto loading-product">
                        <div className="image-container" style={{height: "220px"}}></div>
                        <div className="producto-info" style={{height: "200px"}}></div>
                    </div>
                ))
            ) : (
                productos.map((prod) => <Item key={prod.id} producto={prod} />)
            )}
        </div>
    </div>
  )
}

export default ItemList