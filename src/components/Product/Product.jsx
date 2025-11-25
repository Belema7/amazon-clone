import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                setProducts(res.data)
            }).catch((err)=> {
                console.log(err)
            })
    }, [])

  return (
    <div>
        {
            products.map((singleProduct, id) => (
                
                <ProductCard key={singleProduct.id} product={singleProduct}/>
            ))
        }
      
    </div>
  )
}

export default Product
