import React from 'react'
import classes from './Header.module.css'
import Search from './Search'
import HeaderCart from './HeaderCart'
import HeaderLogin from './HeaderLogin'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <div className={classes.headerMain}>
                <h2>E-Commerce</h2>
                <Search />
                <div className={classes.headerMenu}>
                <HeaderLogin onOpen={props.onLogin}/>
                <HeaderCart onOpen={props.onOpen}/>
                </div>
              </div>
        </header>
    </>
  )
}

export default Header