import React from 'react'
import classes from './Product.module.css'
import AddProductForm from './AddProductForm'

const Product = (props) => {

  return (
    <li className={classes.product}>
      <div className={classes.product__info}>
        <h3>{props.name}</h3>
        <div className={classes.price}>{props.price}</div>
        <div>{props.charge}</div>
        <div>{props.company}</div>
      </div>
      <AddProductForm />
    </li>
  )
}

export default Product