import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);

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
                // This is now safe because 'products' is at least an empty array
                products.map((singleProduct) => (
                    // It's better to use the unique ID as the key, not the index
                    <ProductCard key={singleProduct.id} product={singleProduct}/> 
                ))
            }
        </div>
  )
}

export default Product
