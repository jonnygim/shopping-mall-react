import React, { useContext } from 'react'
import classes from './Product.module.css'
import AddProductForm from './AddProductForm'
import CartContext from '../../store/CartContext'

const Product = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    console.log(amount);

 
    console.log(props.image);
    const product = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      charge: props.charge,
      img: props.image,
    }

    cartContext.addItem(product);
  };

  let imageUrl = '';
  if(props.image === 'product1') {
    imageUrl = require('../images/product1.jpg');
  } else if (props.image === 'product2') {
    imageUrl = require('../images/product2.jpg');
  } else if (props.image === 'product3') {
    imageUrl = require('../images/product3.jpg');
  } else if (props.image === 'product4') {
    imageUrl = require('../images/product4.jpg');
  } else if (props.image === 'product5') {
    imageUrl = require('../images/product5.jpg');
  } else if (props.image === 'product6') {
    imageUrl = require('../images/product6.jpg');
  }
// console.log(imageUrl);

  return (
    <li className={classes.product}>
      <div className={classes.product__info}>
        <img src={imageUrl} width="300px" height="300px"/>
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