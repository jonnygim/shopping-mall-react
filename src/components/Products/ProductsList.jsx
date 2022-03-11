import React from 'react'
import classes from './ProductsList.module.css'
import Product from './Product';
import Card from '../Commons/Card';

const ProductsList = () => {
  
  return (
    <section className={classes.products}>
      <Card>
        <ul>
            {productsList}
        </ul>
      </Card>
    </section>
  )
}

export default ProductsList