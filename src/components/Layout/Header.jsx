import React from 'react'
import classes from './Header.module.css'
import Search from './Search'
import HeaderCart from './HeaderCart'
import Login from './Login'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <div className={classes.headerMain}>
              <div className={classes.headerMenu}>
                <h2>E-Commerce</h2>
                <Search />
              </div>
              <div className={classes.headerUser}>
                <Login onOpen={props.onOpen}/>
                <HeaderCart onOpen={props.onOpen}/>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header