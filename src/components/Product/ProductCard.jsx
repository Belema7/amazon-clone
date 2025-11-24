import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import CurrecyFormat from '../CurrencyFormat/CurrecyFormat';

const ProductCard = ({product}) => {
    const {image, title, id, rating, price} = product;
  return (
    <div className=''>
      <Link>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
      </div>

      <div>
        {/* rating */}
        <Rating value={rating.rate} precision={0.1}/>
        {/* rating count */}
        <span>{rating.count}</span>
      </div>

      <div>
        {/* price */}
        <CurrecyFormat amount={price}/>
      </div>

      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
