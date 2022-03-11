import React, {useState} from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Products/>
      </Main>
    </>
  );
}

export default App;