import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    const price = `$${props.price}`;

  return(
      <li className={classes['cart-item']}>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>    
            <span className={classes.amount}>수량:{props.amount}</span>
          </div>
          <div>
            배송비:{props.charge}
          </div>
      </li>
  ) 
}

export default CartItem