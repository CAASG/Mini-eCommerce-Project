import React, { useEffect } from 'react'

const Nosotros = () => {


  useEffect(() => {

    const click = () => {
      console.log("click")
    }

    window.addEventListener("click", click)

    return () => {
      window.removeEventListener("click", click)
      }
    }, [])
  
  
  return (
    <div>Nosotros</div>
  )
}

export default Nosotros