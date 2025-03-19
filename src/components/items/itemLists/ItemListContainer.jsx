import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/config.js';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]); //Almacena los productos
  const category = useParams().category;
  const [title, setTitle] = useState('Our Products');
  

  useEffect(() => {

    // Update title based on category
    if (category) {
      // Capitalize first letter for display
      const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
      setTitle(`${displayCategory}`);
    } else {
      setTitle('Our Products');
    }
    
    const productosRef = collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category.charAt(0).toUpperCase() + category.slice(1))) : productosRef; //Si tenemos una categoria que query sea igual a todo lo que escribimos de query y si no sea igual a todos los productos

    getDocs(q)
      .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
      })

  }, [category])
  

  return (
    <div>
      <ItemList productos={productos} title={title}/>
    </div>
  )
}

export default ItemListContainer
