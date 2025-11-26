import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import axios from 'axios'

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <section className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Results</h1>
        <p className="text-gray-600 mb-4">
          Category: <span className="font-semibold capitalize">{categoryName}</span>
        </p>

        <hr className="mb-6 border-gray-300" />

        {/* Products grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6
          "
        >
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </LayOut>
  );
};

export default Results;
