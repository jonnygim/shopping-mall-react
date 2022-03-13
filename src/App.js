import React, {useState} from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import Carousel from './components/Layout/Carousel'
import Footer from './components/Layout/Footer'

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  

  return (

      <CartProvider>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <Carousel />
      <Main>
        <Products />
      </Main>
      <Footer />
      </CartProvider>
    
  )
}

export default App;