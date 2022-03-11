import React from 'react'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Shop</h1>
            <HeaderCart />
        </header>
    </>
  )
}

export default Header