import React, {useState} from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Products from './components/Products/Products'
import './App.css'


const App = () => {

  

  return (
    <>
      <Header />
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