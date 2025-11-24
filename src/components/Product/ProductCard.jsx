import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrecyFormat from "../CurrencyFormat/CurrecyFormat";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between">
      
      {/* Image */}
      <Link to={`/product/${id}`} className="flex justify-center">
        <img 
          src={image} 
          alt={title} 
          className="h-40 object-contain mb-4 hover:scale-105 transition"
        />
      </Link>

      {/* Title */}
      <h3 className="text-sm font-medium line-clamp-2 mb-2">
        {title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <Rating 
          value={rating.rate} 
          precision={0.1} 
          size="small"
          readOnly
        />
        <span className="text-xs text-gray-500">({rating.count})</span>
      </div>

      {/* Price */}
      <p className="font-semibold text-lg mb-3">
        <CurrecyFormat amount={price} />
      </p>

      {/* Button */}
      <button 
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md py-2 w-full transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
