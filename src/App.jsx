import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/items/itemLists/ItemListContainer'
import ItemDetailContainer from './components/items/itemDetails/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/us/Nosotros'
import Contact from './components/us/Contact'
import { CartProvider } from './context/CartContex'
import Cart from './components/cart/Cart'



function App() {

  return(
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/productos/:category' element={<ItemListContainer />}/>
            <Route path='/productos' element={<ItemListContainer />}/>
            <Route path='/us' element={<Nosotros />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>

        </BrowserRouter>

        </CartProvider>
    </div>
  );
  
}

export default App
