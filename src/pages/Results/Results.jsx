import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import axios from 'axios'
const Results = () => {
    const [results, setResults] = useState([]);
    const {categoryName} = useParams();

    useEffect(()=> {
        axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    },[])
    return (
        <LayOut>
            <section>
                <h1>Results</h1>
                <p>Category: {categoryName}</p>
                <hr />
                <div>
                    {results?.map((product)=> (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </section>
        </LayOut>
    )
}

export default Results
