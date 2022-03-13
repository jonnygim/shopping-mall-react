import React, {useState} from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import Carousel from './components/Layout/Carousel'
import Footer from './components/Layout/Footer'
import Login from './components/Login/Login'


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  const openLoginHandler = () => {
    setLoginIsShown(true);
  }

  const closeLoginHandler = () => {
    setLoginIsShown(false);
  };
  

  return (

      <CartProvider>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      {loginIsShown && <Login onClose={closeLoginHandler}/>}
      <Header onOpen={openCartHandler} onLogin={openLoginHandler}/>
      <Carousel />
      <Main>
        <Products />
      </Main>
      <Footer />
      </CartProvider>
    
  )
}

export default App;