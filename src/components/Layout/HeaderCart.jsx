import React from 'react'
import classes from './HeaderCart.module.css'
import { CgShoppingCart } from "react-icons/cg";

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}><CgShoppingCart size="24"/></span>
    </button>
  )
}

export default HeaderCart