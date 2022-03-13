import React from 'react'
import classes from './HeaderLogin.module.css'

const HeaderLogin = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
        {/* <span className={classes.icon}><CartIcon /></span> */}
        <span>Login</span>
    </button>
  )
}

export default HeaderLogin