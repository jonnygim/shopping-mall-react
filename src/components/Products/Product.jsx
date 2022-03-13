import React, { useContext } from 'react'
import classes from './Product.module.css'
import AddProductForm from './AddProductForm'
import CartContext from '../../store/CartContext'

const Product = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    console.log(amount);

    const product = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      charge: props.charge
    }

    cartContext.addItem(product);
  };

  return (
    <li className={classes.product}>
      <div className={classes.product__info}>
        <img id="myimg" />
        <h3>{props.name}</h3>
        <div className={classes.price}>{props.price}</div>
        <div>{props.charge}</div>
        <div>{props.company}</div>
      </div>
      <AddProductForm onAddToCart={addItemToCartHandler}/>
    </li>
  )
}

export default Product