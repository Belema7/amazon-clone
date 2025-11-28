import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrecyFormat from "../CurrencyFormat/CurrecyFormat";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description, quantity = 1 } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, rating, price, description
      }
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: id
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: Type.INCREASE_QUANTITY,
      id: id
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: Type.DECREASE_QUANTITY,
      id: id
    });
  };

  // Flex layout for cart items
  if (flex) {
    const itemTotal = price * quantity;
    
    return (
      <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Image */}
        <Link to={`/product/${id}`} className="flex-shrink-0">
          <div className="w-24 h-24 flex items-center justify-center bg-white">
            <img
              src={image}
              alt={title}
              className="max-h-20 max-w-full object-contain"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title and Description */}
          <Link to={`/product/${id}`}>
            <h3 className="text-sm font-medium text-gray-900 hover:text-orange-700 mb-1">
              {title}
            </h3>
          </Link>
          
          {renderDesc && description && (
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {description}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <Rating
              value={rating?.rate || 0}
              precision={0.1}
              size="small"
              readOnly
            />
            <span className="text-xs text-blue-600">
              {rating?.count || 0}
            </span>
          </div>

          {/* Price */}
          <div className="mb-2">
            <span className="text-lg font-bold text-gray-900">
              <CurrecyFormat amount={price} />
            </span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-gray-600">Qty:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-3 py-1 text-sm font-medium min-w-8 text-center border-l border-r border-gray-300">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Item Total */}
          <div className="mb-3">
            <span className="text-sm font-semibold text-gray-900">
              Item total: <CurrecyFormat amount={itemTotal} />
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-auto">
            <button
              onClick={removeFromCart}
              className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm transition-colors"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default grid layout
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full">
      {/* Image */}
      <Link to={`/product/${id}`} className="block p-4">
        <div className="h-48 flex items-center justify-center bg-white">
          <img
            src={image}
            alt={title}
            className="max-h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <Link to={`/product/${id}`}>
          <h3 className="text-sm text-gray-900 line-clamp-2 mb-2 transition-colors duration-200 group-hover:text-orange-700">
            {title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <Rating
            value={rating?.rate || 0}
            precision={0.1}
            size="small"
            readOnly
          />
          <span className="text-xs text-blue-600 cursor-pointer hover:text-orange-700">
            {rating?.count || 0}
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-lg font-bold text-gray-900">
            <CurrecyFormat amount={price} />
          </span>
        </div>

        {/* Delivery */}
        <p className="text-xs text-gray-600 mb-4">
          FREE delivery
        </p>

        {/* Button */}
        {renderAdd && (
          <button
            onClick={addToCart}
            className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;