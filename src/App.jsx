import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/items/itemLists/ItemListContainer'
import ItemDetailContainer from './components/items/itemDetails/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/us/Contact'
import { CartProvider } from './context/CartContex'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'



function App() {

  return(
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/productos/:category' element={<ItemListContainer />}/>
            <Route path='/productos' element={<ItemListContainer />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>

          <Footer />

        </BrowserRouter>

        </CartProvider>
    </div>
  );
  
}

export default App
