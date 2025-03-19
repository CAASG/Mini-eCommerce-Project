import React, { useEffect, useState } from 'react'
import { pedirDatos } from "../../../helpers/pedirDatos";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]); //Almacena los productos
  const category = useParams().category;
  const [title, setTitle] = useState('Our Products');
  

  useEffect(() => {
    console.log(category);
    pedirDatos()
      .then((res) => {
        if (category) {
          const productosFiltrados = res.filter(
            (prod) => prod.category.toLowerCase() === category.toLowerCase()
          );
          console.log("Productos filtrados:", productosFiltrados); // Verificar si encuentra productos
          setProductos(productosFiltrados);
          setTitle(category);
        } else {
          setProductos(res);
          setTitle("Our Products");
        }
    })
  }, [category])
  

  return (
    <div>
      <ItemList productos={productos} title={title}/>
    </div>
  )
}

export default ItemListContainer
