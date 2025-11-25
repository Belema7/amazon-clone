import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const ProductCard = ({product}) => {
  return (
    <div>
      <Link>
        <img src={product.image} alt={product.title} />
      </Link>

      <div>
        <h3>{product.title}</h3>
      </div>

      <div>
        {/* rating */}
        <Rating/>
        {/* rating count */}
        <span>{count}</span>
      </div>

      <div>
        {/* price */}
      </div>
    </div>
  )
}

export default ProductCard
