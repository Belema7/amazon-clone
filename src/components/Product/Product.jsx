import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10 bg-gray-100 min-h-screen text-center">
      
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-600">
          Popular items based on customer purchases
        </p>
      </div>

      {/* Conditional Rendering */}
      {isloading ? (
        <Loader/>
      ) : (
        /* Products Grid */
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6
        ">
          {products.map((singleProduct) => (
            <ProductCard key={singleProduct.id} product={singleProduct} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Product;