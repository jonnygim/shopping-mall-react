import React, {useState} from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import './App.css'


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  

  return (
    <>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <Banner />
      <Main>
        <Products />
      </Main>
    </>
  )
}

function Banner() {
  return(
    <>
    <div className="banner">
    </div>
    </>
  )
}


export default App;