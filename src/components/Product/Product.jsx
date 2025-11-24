import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        xl:grid-cols-6 
        gap-6
      ">
        {products.map((singleProduct) => (
          <ProductCard key={singleProduct.id} product={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default Product;
