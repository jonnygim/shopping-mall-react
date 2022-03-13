import React from 'react'
import classes from './Login.module.css'

const Login = (props) => {
    return (
        <button className={classes.button} onClick={props.onOpen}>
            <span>Login</span>
        </button>
  )
}

export default Login