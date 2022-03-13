import React, { useEffect, useState } from 'react';
import Card from '../Commons/Card';
import Product from './Product';
import classes from './ProductsList.module.css';


const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://shopping-mall-react-default-rtdb.firebaseio.com/products.json');
      console.log(response.ok);
      const responseData = await response.json();
      const productsData = [];
      for (const key in responseData) {
        
        productsData.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          charge: responseData[key].deliveryCharge === 0 ? "free" : responseData[key].deliveryCharge,
          company: responseData[key].company,
          image: key,
        });

      }
      setProducts(productsData);
    };

    fetchProducts().catch(error => console.log(error));
  }, []);

  const productsList = products.map(product => 
      <Product 
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        charge={product.charge}
        company={product.company}
        image={product.image}
      />
    )
    console.log(productsList);
    console.log();
  
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