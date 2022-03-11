import React, {useState} from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }
  

  return (
    <>
      <Header onOpen={openCartHandler}/>
      <Main>
        <Products />
      </Main>
    </>
  )
}

export default App;